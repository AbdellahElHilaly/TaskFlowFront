import {Component, OnInit} from '@angular/core';
import {RefreshTokenService} from "../../../services/refresh-token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private refreshTokenService: RefreshTokenService) {
    this.refreshTokenService.refresh();
  }

}


