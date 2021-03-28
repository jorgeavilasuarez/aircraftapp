import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: UserInterface[] = [];
  constructor(public userService: UsersService) {

  }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(x => {
      this.users = x;
    });
  }

}
