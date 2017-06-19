import { Injectable } from '@angular/core';
// import { Action } from 'redux';
import {Action} from './action';

@Injectable()
export class MemoryActions {
    static CLEAR = 'CLEAR';
    static BACKSPACE = 'BACKSPACE';
    static ADD_SYMBOL = 'ADD_SYMBOL';
    static ADD_OPERATOR = 'ADD_OPERATOR';
    static ADD_DOT = 'ADD_DOT';
    static SQRT = 'SQRT';
    static DIVISION_ONE = 'DIVISION_ONE';
    static EQUAL = 'EQUAL';

    clear(): Action {
        return {
            type: MemoryActions.CLEAR,
            payload: null
        };
    }
    backspace(): Action {
        return {
            type: MemoryActions.BACKSPACE,
            payload: null
        };
    }
    sqrt(): Action {
        return {
            type: MemoryActions.SQRT,
            payload: null
        };
    }
    divisionOne(): Action {
        return {
            type: MemoryActions.DIVISION_ONE,
            payload: null
        };
    }
    equal(): Action {
        return {
            type: MemoryActions.EQUAL,
            payload: null
        };
    }
    addSymbol(symbol): Action {
        return {
            type: MemoryActions.ADD_SYMBOL,
            payload: symbol
        };
    }
    addOperator(symbol): Action {
        return {
            type: MemoryActions.ADD_OPERATOR,
            payload: symbol
        };
    }
    addDot(dot): Action {
        return {
            type: MemoryActions.ADD_DOT,
            payload: dot
        };
    }
}
