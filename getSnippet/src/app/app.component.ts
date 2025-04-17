import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { ModelExplorerComponent } from './components/model-explorer/model-explorer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DragdropComponent,ModelExplorerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'getSnippet';
}
