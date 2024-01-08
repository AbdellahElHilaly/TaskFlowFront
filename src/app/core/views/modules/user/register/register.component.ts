import {Component} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../models/interfaces/user";
import {TokenService} from "../../../../services/token.service";
import {Token} from "../../../../models/interfaces/token";
import {UserForm} from "../../../../models/form/user-form";
import {Router} from "@angular/router";
import {SimpleError} from "../../../../models/interfaces/simple-error";
import {ValidationError} from "../../../../models/interfaces/validation-error";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userForm: UserForm = new UserForm();

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
  }

  public register(): void {
    if (this.userForm.formGroup.valid) {
      this.authService.register(this.userForm.formGroup.value).subscribe(
        (token: Token) => {
          this.tokenService.saveAccessToken(token.accessToken);
          this.tokenService.saveRefreshToken(token.refreshToken);
          this.goToHome();
        },
        (error: any) => {
          console.log(error.error);
          if(!this.navigateToErrorComponent(error.error )) this.goToInternalSeverErrorComponent(error.error);
        }
      );
    }
  }


  private goToHome() {
    this.router.navigate(['/home']).then(r => console.log("navigate to home"));
  }


  private navigateToErrorComponent(error: ValidationError): boolean {

    if(error.message === "Validation Failed"){
      this.goToValidationErrorComponent(error);
      return true;
    }
    else return false;

  }


  private goToInternalSeverErrorComponent(error: SimpleError) {
    this.router.navigate(['/internal-server-error'] ,{ state: { errorData: error } })
      .then(r => console.log("navigate to internal server error"));

  }

  private goToValidationErrorComponent(error: ValidationError) {
    this.router.navigate(['/validation-error'] ,{ state: { errorData: error } })
      .then(r => console.log("navigate to validation error"));

  }
}
