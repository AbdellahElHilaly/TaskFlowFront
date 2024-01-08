import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/interfaces/user";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  private loadUserProfile() {
    this.userService.getProfile().subscribe(
      (users: Array<User>) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Error fetching user profile', error);
      }
    );
  }
}
