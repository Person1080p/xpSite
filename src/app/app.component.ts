import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xpSite';
  }
  let played = false;
  document.body.addEventListener("mousemove", function () {
    if(!played){
      played=true;
      // startSound(); 
      
    }
})
function startSound() {
  let audio = new Audio();
      audio.src = "assets/sounds/startup.mp3";
      audio.load();
      audio.play();
    // throw new Error('Method not implemented.');
}

