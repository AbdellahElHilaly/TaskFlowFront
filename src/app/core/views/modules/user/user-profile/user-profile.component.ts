import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../services/user.service";
import { User } from "../../../../models/interfaces/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile?: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  private loadUserProfile() {
    this.userService.getProfile().subscribe(
      (user: User) => {
        this.profile = user;
      },
      (error: any) => {
        console.error('Error fetching user profile', error);
      }
    );
  }
}
