import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiEndPoints} from "../../utils/const/api-end-points";
import {User} from "../models/interfaces/user";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {RefreshTokenService} from "./refresh-token.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private profileUrl: string = ApiEndPoints.getInstance().profile;


  constructor(private http: HttpClient, private tokenService: TokenService, private refreshTokenService: RefreshTokenService) {
  }

  public getProfile(): Observable<Array<User>> {
    let jwtAccessToken = this.tokenService.getAccessToken();
    const tokenType = 'Bearer ';
    const header = new HttpHeaders().set('Authorization', tokenType + jwtAccessToken);
    const headers = {headers: header};
    console.log(headers);
    return this.http.get<Array<User>>(this.profileUrl, headers);
  }

}
