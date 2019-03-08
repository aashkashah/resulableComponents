import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'radiolist-element',
    templateUrl: './radiolist.component.html'
})

export class RadioListComponent {
    
    public labels = ['test cat1', 'test cat2'];

    debugger;
    public enum_details = [
        {name: 'aashka'},
        {name: 'shah'},
        {name: 'angular'},
      ]
}