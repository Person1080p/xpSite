import { Component } from '@angular/core';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],

})
export class ApplicationComponent {
  

}
