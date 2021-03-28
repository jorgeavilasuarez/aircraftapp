import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'custom-menu',
    templateUrl: './custom-menu.component.html',
    styleUrls: ['./custom-menu.component.scss']
})
export class CustomMenuComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }

    logout() {
        localStorage.clear();
        window.location.href = "/login";
    }

    changeTheme() {
        let theme = localStorage.getItem("theme") ?? 'dark';
        localStorage.setItem("theme", 'dark');
        if (theme === 'dark') {
            localStorage.setItem("theme", 'light');
        }
        window.location.reload(true);
    }
}
