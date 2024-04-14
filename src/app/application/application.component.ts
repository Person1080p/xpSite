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
  value: number;
  constructor() {
    this.value = 30;
  }
  ngOnInit(){
    setInterval(() => this.increment(), 1000); // Changed delay to 1000 (1 second)
    }
    increment() {
      if (this.value<100) {
        this.value = this.value + 5;
      }
      else{
        this.value=0;
      }
    }


}

