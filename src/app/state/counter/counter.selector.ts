import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {Counter} from "@app/state/counter/couter.model";


export const CounterFeatureSelector = createFeatureSelector<Counter>('counter');
export const counterSelector= createSelector(CounterFeatureSelector, getCounter);

function getCounter(counterState: Counter): Counter {
  return counterState;
}

