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
    const matchedObjects = this.getAllObjectsByKey(studioJson, this.searchText);

    if (matchedObjects.length) {
      const mergedFields: Record<string, string> = {};

      matchedObjects.forEach(obj => {
        const fields = this.getFieldTypes(obj);
        Object.entries(fields).forEach(([key, type]) => {
          mergedFields[key] = type;
        });
      });

      this.currentFields = mergedFields;
      this.nestedModels = Object.entries(mergedFields)
        .filter(([_, type]) => type.startsWith('I'))
        .map(([key]) => key);

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
    const matchedObjects = this.getAllObjectsByKey(studioJson, modelKey);
    const mergedFields: Record<string, string> = {};
    matchedObjects.forEach(obj => {
      const fields = this.getFieldTypes(obj);
      Object.entries(fields).forEach(([key, type]) => {
        mergedFields[key] = type;
      });
    });
    return mergedFields;
  }

  getFieldTypes(obj: any): Record<string, string> {
    const fields: Record<string, string> = {};
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      if (!isNaN(Number(key))) continue;
  
      const value = obj[key];
      fields[key] =
        typeof value === 'object' && value !== null
          ? `I${this.capitalize(key)}`
          : typeof value;
    }
    return fields;
  }
  

  getAllObjectsByKey(json: any, targetKey: string): any[] {
    const matches: any[] = [];

    function search(obj: any) {
      if (Array.isArray(obj)) {
        obj.forEach(item => search(item));
      } else if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
          if (key.toLowerCase() === targetKey.toLowerCase() && typeof obj[key] === 'object') {
            matches.push(obj[key]);
          }
          search(obj[key]);
        }
      }
    }

    search(json);
    return matches;
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

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
