import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'custom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public roles: string[] = ['admin', 'cliente', 'piloto'];
  public user: string = 'user1';
  public password: string = '123456';
  public role: string = 'admin';
  constructor(public rolesService: RolesService, private router: Router) { }

  ngOnInit(): void {}
  
  onLogin() {
    localStorage.setItem("logged", this.role);
    window.location.href = "/aircraft/rent";
  }
}
