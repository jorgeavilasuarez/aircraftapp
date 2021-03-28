import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'custom-table',
    templateUrl: './custom-table.component.html',
    styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

    @Input() data: any[] = [];
    @Input() columns: any[] = [];
    @Input() mode: string = 'view';
    @Input() showButtons: boolean = true;

    constructor() { }

    ngOnInit(): void {

    }

    delete(index: number): void {
        if (confirm("Esta seguro de eliminar este registro")) {
        }
    }

    save(index: number): void {

    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    isString(val: any): boolean { return typeof val === 'string'; }
}
