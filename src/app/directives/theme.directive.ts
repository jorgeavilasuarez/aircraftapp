import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appTheme]'
})
export class ThemeDirective implements OnInit {
    constructor(private el: ElementRef) { }

    async ngOnInit() {
        let theme = localStorage.getItem("theme") ?? 'dark';

        if (theme === 'dark') {
            this.el.nativeElement.classList.add("bg-dark");
            this.el.nativeElement.classList.add("text-white");
        }
        if (theme ==='light') {
            this.el.nativeElement.classList.add("bg-light");
            this.el.nativeElement.classList.add("text-dark");
        }
    }
}