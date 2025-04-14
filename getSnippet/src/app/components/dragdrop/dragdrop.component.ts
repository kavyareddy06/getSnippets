import { Component } from '@angular/core';
import studioJson from '../../../../assets/studio.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dragdrop',
  imports: [CommonModule],
  templateUrl: './dragdrop.component.html',
  styleUrl: './dragdrop.component.css'
})
export class DragdropComponent {
  items = ['button', 'radio', 'text', 'maintenance'];
  code = '';

  /**
   * Recursively search the entire JSON tree for any objects
   * that contain the keyword (in key or value).
   * Each match returns the full object as a formatted string.
   */
  getMatchingBlocks(json: any, keyword: string): string[] {
    const matches: string[] = [];
  
    function search(obj: any) {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          search(item);
        }
      } else if (typeof obj === 'object' && obj !== null) {
        // Check if this specific object contains the keyword directly
        const match = Object.entries(obj).some(
          ([key, value]) =>
            (typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())) ||
            (key.toLowerCase().includes(keyword.toLowerCase()))
        );
  
        if (match) {
          matches.push(JSON.stringify(obj, null, 2)); 
        }
  
        // Continue to search deeper
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            search(obj[key]);
          }
        }
      }
    }
  
    search(json);
    return matches;
  }
  
  

  // Event: Start dragging
  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer?.setData('text/plain', item);
  }

  // Event: Allow drop zone
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  snippets: string[] = [];

  onDrop(event: DragEvent) {
    event.preventDefault();
    const keyword = event.dataTransfer?.getData('text/plain') || '';
    const newSnippets = this.getMatchingBlocks(studioJson, keyword);
  
    // Prepend new matches to keep most recent at top
    this.snippets = [...newSnippets, ...this.snippets];
  }
  
}