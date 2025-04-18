import { Component } from '@angular/core';
import studioJson from '../../../../assets/studio.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-explorer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './model-explorer.component.html',
  styleUrls: ['./model-explorer.component.css']
})
export class ModelExplorerComponent {
  searchText = '';
  selectedModel: string = '';
  snippets: string[] = [];
  currentFields: Record<string, string> = {};
  nestedModels: string[] = [];
  expandedState: { [model: string]: boolean } = {};

  onSearch(): void {
    this.selectedModel = this.searchText;
    const matchedObject = this.getObjectByKey(studioJson, this.searchText);

    if (matchedObject && typeof matchedObject === 'object') {
      this.currentFields = this.getFieldTypes(matchedObject);
      this.nestedModels = this.getNestedObjectKeys(matchedObject);
      this.snippets = this.getMatchingSnippets(this.searchText);

      this.expandedState = {};
      this.nestedModels.forEach(model => this.expandedState[model] = false);
    } else {
      this.clearSearch();
    }
  }

  clearSearch(): void {
    this.searchText = '';
    this.selectedModel = '';
    this.currentFields = {};
    this.nestedModels = [];
    this.snippets = [];
    this.expandedState = {};
  }

  toggleExpansion(modelName: string): void {
    this.expandedState[modelName] = !this.expandedState[modelName];
  }

  extractFieldsFromJson(modelKey: string): Record<string, string> {
    const nestedObj = this.getObjectByKey(studioJson, modelKey);
    return nestedObj ? this.getFieldTypes(nestedObj) : {};
  }

  getFieldTypes(obj: any): Record<string, string> {
    const fields: Record<string, string> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        fields[key] = typeof value === 'object' && value !== null ? 'object' : typeof value;
      }
    }
    return fields;
  }

  getNestedObjectKeys(obj: any): string[] {
    return Object.entries(obj)
      .filter(([_, value]) => typeof value === 'object' && value !== null)
      .map(([key]) => key);
  }

  getObjectByKey(json: any, targetKey: string): any | null {
    let result: any = null;

    function search(obj: any) {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          search(item);
          if (result) break;
        }
      } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          if (key.toLowerCase() === targetKey.toLowerCase()) {
            result = obj[key];
            return;
          }
          search(obj[key]);
          if (result) break;
        }
      }
    }

    search(json);
    return result;
  }

  getMatchingSnippets(keyword: string): string[] {
    const matches: string[] = [];

    function search(obj: any) {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          search(item);
        }
      } else if (typeof obj === 'object' && obj !== null) {
        const match = Object.entries(obj).some(
          ([key, value]) =>
            (typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())) ||
            key.toLowerCase().includes(keyword.toLowerCase())
        );

        if (match) {
          matches.push(JSON.stringify(obj, null, 2));
        }

        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            search(obj[key]);
          }
        }
      }
    }

    search(studioJson);
    return matches.length ? matches.slice(0, 10) : ['No matching snippets found.'];
  }
}
