import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appRole]'
})
export class RoleDirective implements OnInit {

    @Input() appRole: string[] = [];
    constructor(private el: ElementRef) { }

    async ngOnInit() {
        if (!this.appRole.includes(localStorage.getItem('logged') ?? '*')) {
            this.el.nativeElement.style.display = 'None';
        }
    }
}