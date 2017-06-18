import { Injectable } from '@angular/core';
// import { Action } from 'redux';
import {Action} from './action';

@Injectable()
export class MemoryActions {
    static CLEAR = 'CLEAR';
    static BACKSPACE = 'BACKSPACE';
    static ADD_SYMBOL = 'ADD_SYMBOL';
    static ADD_DOT = 'ADD_DOT';
    static SQRT = 'SQRT';
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
    addDot(dot): Action {
        return {
            type: MemoryActions.ADD_DOT,
            payload: dot
        };
    }
}
