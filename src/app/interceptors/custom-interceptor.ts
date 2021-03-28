import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { users } from "../data/user";
import { roles } from "../data/roles";
import { aircraft } from "../data/aircraft";
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        let data = null;
        if (req.method == 'GET') {
            if (req.url == "/users") {
                data = users;
            }
            if (req.url == "/roles" && req.method == 'GET') {
                data = roles;
            }
            if (req.url == "/aircrafts" && req.method == 'GET') {
                data = aircraft;
            }
        }
        return of(new HttpResponse({
            status: 200,
            body: data
        }));

    }
}