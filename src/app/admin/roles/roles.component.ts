import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public roles: string[] = [];
  constructor(public rolesService: RolesService) {

  }

  ngOnInit(): void {
    this.rolesService.GetRoles().subscribe(roles => {
      this.roles = roles;
    });
  }
}
