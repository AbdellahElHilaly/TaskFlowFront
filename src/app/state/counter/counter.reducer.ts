import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { initialState } from "./counter.store";
import {Counter} from "@app/state/counter/couter.model";

export const counterReducer: ActionReducer<Counter> = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(CounterActions.reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  }),
  on(CounterActions.setCount, (state, { payload }) => {
    return {
      ...state,
      count: payload,
    };
  }),
);

