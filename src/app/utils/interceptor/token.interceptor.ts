import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from "../../core/services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.tokenService.getAccessToken();
    const refreshToken = this.tokenService.getRefreshToken();

    this.checkRefreshTokenRequest(request, refreshToken);

    this.checkSimpleRequest(request, accessToken);

    return next.handle(request);

  }



  private checkSimpleRequest(request: HttpRequest<any>, accessToken: string): void {
    if (request.url.endsWith('/security/logout')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
  }

  private checkRefreshTokenRequest(request: HttpRequest<any>, refreshToken: string): void {
    if (request.url.endsWith('/security/refresh')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${refreshToken}`
        }
      });
    }
  }


}
