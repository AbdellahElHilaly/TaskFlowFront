import { Injectable } from '@angular/core';
import {ApiEndPoints} from "../../utils/const/api-end-points";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../models/interfaces/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  loginUrl:string = ApiEndPoints.getInstance().login;
  private registerUrl:string = ApiEndPoints.getInstance().register;
  private logoutUrl:string = ApiEndPoints.getInstance().logout;

  constructor(private http: HttpClient) {
  }

  public register(user:any):Observable<Token>{
    return this.http.post<Token>(this.registerUrl,user);
  }




}
