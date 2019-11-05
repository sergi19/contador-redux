import { Action } from '@ngrx/store';

export const increment = '[Counter Component] increment';
export const decrement = '[Counter Component] decrement';
export const multiply = '[Counter Component] multiply';
export const divide = '[Counter Component] divide';
export const reset = '[Counter Component] reset';

// implementar acciones como clases
export class IncrementAction implements Action {
    readonly type = increment;
}

export class DecrementAction implements Action {
    readonly type = decrement;
}

export class MultiplyAction implements Action {
    readonly type = multiply;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }
}

export class DivideAction implements Action {
    readonly type = divide;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }
}

export class ResetAction implements Action {
    readonly type = reset;
}

export type actions = IncrementAction | DecrementAction | MultiplyAction | DivideAction | ResetAction;
