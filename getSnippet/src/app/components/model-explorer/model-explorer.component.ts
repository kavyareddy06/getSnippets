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
  expandedState: { [model: string]: boolean } = {}; // To track accordion state

  // Example in-component model definitions
  modelMap: Record<string, { fields: Record<string, string>, tags: string[] }> = {
    IStyle: {
      fields: {
        height: 'string',
        padding: 'string',
        margin: 'string',
        color: 'string',
        backgroundColor: 'string'
      },
      tags: ['style', 'padding', 'color']
    },
    ILocale: {
      fields: {
        localeId: 'string',
        currency: 'ICurrency',
        date: 'IDate'
      },
      tags: ['locale', 'currency', 'date']
    },
    ICurrency: {
      fields: {
        code: 'string',
        display: 'string',
        digitsInfo: 'string'
      },
      tags: ['currency', 'money']
    }
  };

  get availableModels(): string[] {
    return Object.keys(this.modelMap);
  }

  onSearch(): void {
    const modelName = this.availableModels.find(name =>
      name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      this.modelMap[name].tags.some(tag => tag.toLowerCase().includes(this.searchText.toLowerCase()))
    );

    if (modelName) {
      this.selectedModel = modelName;
      this.currentFields = this.modelMap[modelName].fields;
      this.nestedModels = this.getNestedTypes(this.currentFields);
      this.snippets = this.getMatchingSnippets(this.searchText);

      // Reset and initialize expanded states
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

  extractFields(modelName: string): Record<string, string> {
    return this.modelMap[modelName]?.fields || {};
  }

  getNestedTypes(fields: Record<string, string>): string[] {
    return Object.values(fields).filter(value => this.modelMap[value]);
  }

  toggleExpansion(modelName: string): void {
    this.expandedState[modelName] = !this.expandedState[modelName];
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
