import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from "../../../../services/auth.service";
import { TokenService } from "../../../../services/token.service";
import { of } from 'rxjs';
import { Token } from "../../../../models/interfaces/token";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;
  let tokenService: TokenService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [AuthService, TokenService],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    tokenService = TestBed.inject(TokenService);

    fixture.detectChanges();
  });


  it('should register user successfully', () => {
    const fakeUser: any = {
      firstName: 'abdellah',
      lastName: 'el hilaly',
      email: 'abdellah2@gmail.com',
      password: '1234',
    };

    const fakeToken: Token = {
      accessToken: 'fakeAccessToken',
      refreshToken: 'fakeRefreshToken'
    };

    spyOn(authService, 'register').and.returnValue(of(fakeToken));
    spyOn(tokenService, 'saveAccessToken');
    spyOn(tokenService, 'saveRefreshToken');

    component.user = fakeUser;
    component.register();

    expect(authService.register).toHaveBeenCalledWith(fakeUser);
    expect(tokenService.saveAccessToken).toHaveBeenCalledWith(fakeToken.accessToken);
    expect(tokenService.saveRefreshToken).toHaveBeenCalledWith(fakeToken.refreshToken);
    expect(component.user).toEqual(fakeUser);
  });

});
