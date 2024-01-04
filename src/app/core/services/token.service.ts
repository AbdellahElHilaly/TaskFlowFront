import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  constructor(private cookieService: CookieService) { }

  public saveAccessToken(token: string): void {
    this.cookieService.set(this.ACCESS_TOKEN_KEY, token);
  }

  public getAccessToken(): string {
    return this.cookieService.get(this.ACCESS_TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    this.cookieService.set(this.REFRESH_TOKEN_KEY, token);
  }

  public getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }
}
