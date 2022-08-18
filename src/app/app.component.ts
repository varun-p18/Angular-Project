import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  x=true
  y=false
  home(){
    this.x=true
    this.y=false
  }
  add(){
    this.x=false
    this.y=true
  }
}
