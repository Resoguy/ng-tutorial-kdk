import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  get users() {
    return this.userService.users;
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {}

}
