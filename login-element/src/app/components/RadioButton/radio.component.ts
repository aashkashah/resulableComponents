import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'radio-element',
    templateUrl: './radio.component.html',
    //encapsulation: ViewEncapsulation.Native // commented out to support edge
  })
  export class RadioComponent {
    @Input()
    public name: string;
  
    @Input()
    public url: string;
  
    @Input()
    public color: string = 'red';
  
    @Input()
    public size: number = 1;

    @Input()
    public headername: string;

    @Input()
    public rdoname: string;

    @Input()
    public rdovalue: string;
    
    @Input()
    public rdotext: string;
  }
  