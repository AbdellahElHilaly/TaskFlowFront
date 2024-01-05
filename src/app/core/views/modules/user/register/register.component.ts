import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../models/interfaces/user";
import {TokenService} from "../../../../services/token.service";
import {Token} from "../../../../models/interfaces/token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  public user:User;
  constructor(private authService:AuthService ,private tokenService:TokenService) {

    this.user = this.getFakeUser();

  }


  public register():void{
    console.log("register");
    this.authService.register(this.user).subscribe(
      (token:Token) => {
        this.tokenService.saveAccessToken(token.accessToken);
        this.tokenService.saveRefreshToken(token.refreshToken);

        console.log(token);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  private getFakeUser():any {
    return {
      firstName:'abdellah',
      lastName:'el hilaly',
      email:'abdellah2@gmail.com',
      password:'1234',
    }
  }
}
