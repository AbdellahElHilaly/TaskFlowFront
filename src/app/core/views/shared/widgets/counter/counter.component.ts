import {Component} from '@angular/core';
import {CounterStore} from "@app/state/counter/counter.store";
import {Store} from "@ngrx/store";
import * as CounterActions from "@app/state/counter/counter.actions";
import {counterSelector} from "@app/state/counter/counter.selector";
import {Counter} from "@app/state/counter/couter.model";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counter?: Counter;

  constructor(private store: Store<CounterStore>) {
    this.store.select(counterSelector).subscribe(
      value => {
        this.counter = value;
      }
    )
  }



  add() {
    this.store.dispatch({type: CounterActions.increment.type});
  }

  sub() {
    this.store.dispatch({type: CounterActions.decrement.type});
  }

  reset() {
    this.store.dispatch({type: CounterActions.reset.type});
  }

  addRandom() {
    let number : number = Math.random() * 100;
    this.store.dispatch({type: CounterActions.setCount.type, payload: number});
  }

}
