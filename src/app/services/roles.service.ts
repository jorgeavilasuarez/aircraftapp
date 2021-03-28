import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  public GetRoles() {
    return this.http.get<string[]>("/roles");
  }


  // public AddRole(name: string): string[] {
  //   let index = this.roles.indexOf(name);
  //   if (index == -1) {
  //     this.roles.push(name);
  //   }
  //   return this.roles;
  // }

  // public DeleteRole(name: string): string[] {
  //   let index = this.roles.indexOf(name);
  //   if (index != -1) {
  //     this.roles.splice(index, 1);
  //   }
  //   return this.roles;
  // }
}
