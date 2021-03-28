import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

    mode: string = 'view'
    @Output() changeMode = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void {
    }

    clickToogle(mode: string) {
        this.mode = mode;
        this.changeMode.emit(this.mode);
    }

}
