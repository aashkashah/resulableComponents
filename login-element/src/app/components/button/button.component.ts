
import { Component, Input } from "@angular/core";

@Component({
    selector: 'button-element',
    templateUrl: './button.component.html'
  })

  export class ButtonComponent {
    @Input()
   data: Data;

   @Input()
   text: string;

  }

  interface Data {
      title: string,
      description: string
  }

import { Component, Input } from "@angular/core";

@Component({
    selector: 'button-element',
    templateUrl: './button.component.html'
  })

  export class ButtonComponent {
    @Input()
   data: Data;

   @Input()
   text: string;

  }

  interface Data {
      title: string,
      description: string
  }

