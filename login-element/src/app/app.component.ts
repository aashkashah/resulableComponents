import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // encapsulation: ViewEncapsulation.Native // commented out to support edge
})
export class AppComponent {
  @Input() name = 'friend';
  focus: string;
  focusSet = false;
  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}
