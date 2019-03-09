import { Component, ViewEncapsulation, Input, OnInit, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef } from '@angular/core';


@Component({
    selector: 'radiolist-element',
    templateUrl: './radiolist.component.html',
    //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RadioListComponent implements OnInit {
    
     // to do: see if we can pass complex objects from client
    @Input()
    public labels: string;
    
    @Input()
    public backgroundcolors: string;

    public radioinput: IRadioInput[] = []; 

    constructor() {
       //this.radioinput = [];
    }

    ngOnInit() {

        let labelsArray: string[] =   JSON.parse(this.labels); 
        let colorArray: string[] =  JSON.parse(this.backgroundcolors);

        for(let i = 0; i < labelsArray.length; i++)
        {
            let radio: IRadioInput = {label: labelsArray[i], backgroundcolor: colorArray[i]};
            this.radioinput.push(radio);
        }

    }
   
}

interface IRadioInput {
    label: string;
    backgroundcolor: string;
}