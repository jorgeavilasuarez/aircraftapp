import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem("logged") == null) {
            console.log('No estás logueado');            
            window.location.href = '/login';
            return false;
        }
        return true;
    }
}