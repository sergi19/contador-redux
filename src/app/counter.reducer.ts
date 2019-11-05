import { Action, createReducer, on, props } from '@ngrx/store';
import * as fromCount from './counter.actions';

export function counterReducer(state: number = 10, action: fromCount.actions) {
    switch (action.type) {
        case fromCount.increment:
            return state + 1;
        case fromCount.decrement:
            return state - 1;
        case fromCount.multiply:
            return state * action.payload;
        case fromCount.divide:
            return state / action.payload;
        case fromCount.reset:
            return 0;
        default:
            return state;
    }
}

/*export const initialState = 0;
const countReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(multiply, state => state * 2),
    on(divide, state => state / 2),
    on(reset, state => 0)
);*/

/*export function counterReducer(state, action) {
    return countReducer(state, action);
}*/
