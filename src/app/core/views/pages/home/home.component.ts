import {Component, OnInit} from '@angular/core';
import {RefreshTokenService} from "../../../services/refresh-token.service";
import {CounterStore} from "@app/state/counter/counter.store";
import {Store} from "@ngrx/store";
import {counterSelector} from "@app/state/counter/counter.selector";
import {Counter} from "@app/state/counter/couter.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  counter?: Counter;

  constructor(private refreshTokenService: RefreshTokenService, private store: Store<CounterStore>) {
    // this.refreshTokenService.refresh();
    this.store.select(counterSelector).subscribe(
      value => this.counter = value
    )
  }

}


