import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <p>We bind the event with parenthesis</p>
    <p>You can add the $event to the function and also log it out in the console</p>
    <h1>{{title}}</h1>
    <button (click)="onClick($event)">SAVE</button>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Event Binding";
  onClick($event: any) {
    console.log("button was clicked", '$event');
  }
}
