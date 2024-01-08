import { Injectable } from "@angular/core";
import { ApiEndPoints } from "../../utils/const/api-end-points";
import { Token } from "../models/interfaces/token";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {
  private refreshTokenUrl: string = ApiEndPoints.getInstance().refreshToken;

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }


  public refresh(): void {
    let jwtRefreshToken = this.tokenService.getRefreshToken();
    const tokenType  = 'Bearer ';
    const header = new HttpHeaders().set('Authorization', tokenType + jwtRefreshToken);
    const headers = { headers: header };

    this.http.post<Token>(this.refreshTokenUrl, null, headers)
      .subscribe((response) => { //subscribe : request geted from server
        this.tokenService.saveAccessToken(response.accessToken);
      });
  }
}
