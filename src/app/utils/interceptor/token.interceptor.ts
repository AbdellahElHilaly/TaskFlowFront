// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, switchMap } from 'rxjs/operators';
// import { TokenService } from '../../core/services/token.service';
// import { RefreshTokenService } from '../../core/services/refresh-token.service';
//
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(
//     private tokenService: TokenService,
//     private refreshTokenService: RefreshTokenService
//   ) {}
//
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const accessToken = this.tokenService.getAccessToken();
//     const refreshToken = this.tokenService.getRefreshToken();
//
//     this.checkSimpleRequest(request, accessToken);
//
//     if (this.isRefreshTokenRequest(request)) {
//       return next.handle(request);
//     }
//
//     return next.handle(request).pipe(
//       catchError((error) => {
//         if (error.status === 403 && refreshToken) {
//           return this.handle403Error(request, next);
//         } else {
//           return throwError(error);
//         }
//       })
//     );
//   }
//
//   private checkSimpleRequest(
//     request: HttpRequest<any>,
//     accessToken: string
//   ): HttpRequest<any> {
//     if (request.url.endsWith('/security/logout')) {
//       return request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//     }
//     return request;
//   }
//
//   private isRefreshTokenRequest(request: HttpRequest<any>): boolean {
//     return request.url.endsWith('/security/refresh');
//   }
//
//   private handle403Error(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return this.refreshTokenService.refresh().pipe(
//       switchMap(() => {
//         const newAccessToken = this.tokenService.getAccessToken();
//         console.log('newAccessToken', newAccessToken);
//
//         request = request.clone({
//           setHeaders: {
//             Authorization: `Bearer ${newAccessToken}`,
//           },
//         });
//
//         return next.handle(request);
//       })
//     );
//   }
// }
