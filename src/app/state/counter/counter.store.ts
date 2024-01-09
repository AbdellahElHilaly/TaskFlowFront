import {Counter} from "@app/state/counter/couter.model";

export interface CounterStore {
  counter: Counter;
}

export const initialState: Counter = {
  count: 22
};

