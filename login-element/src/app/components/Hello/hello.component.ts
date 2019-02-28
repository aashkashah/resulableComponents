import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'hello-element',
  templateUrl: './hello.component.html',
 // encapsulation: ViewEncapsulation.Native // commented out to support edge
})
export class HelloComponent {
  @Input() name = 'friend';
}
