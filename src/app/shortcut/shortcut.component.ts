import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent {
  @Input() imageSrc: string = "";
  @Input() name: string = "";
  @Input() linkTo: any; // This can be a component class or its selector

}
