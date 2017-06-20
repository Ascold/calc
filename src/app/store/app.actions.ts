import {Injectable} from '@angular/core';
import {Action} from './action';

@Injectable()
export class MemoryActions {
    static EXECUTE_MC = 'EXECUTE_MC';
    static EXECUTE_MR = 'EXECUTE_MR';
    static EXECUTE_MS = 'EXECUTE_MS';
    static EXECUTE_MPLUS = 'EXECUTE_MPLUS';
    static EXECUTE_MMINUS = 'EXECUTE_MMINUS';
    static CLEAR = 'CLEAR';
    static BACKSPACE = 'BACKSPACE';
    static PLUS_MINUS = 'PLUS_MINUS';
    static ADD_SYMBOL = 'ADD_SYMBOL';
    static ADD_OPERATOR = 'ADD_OPERATOR';
    static ADD_DOT = 'ADD_DOT';
    static ADD_PI = 'ADD_PI';
    static SQRT = 'SQRT';
    static PERCENTAGE = 'PERCENTAGE';
    static DIVISION_ONE = 'DIVISION_ONE';
    static EQUAL = 'EQUAL';
    static SQUARE = 'SQUARE';
    static CUBE = 'CUBE';
    static NATURAL_LOG = 'NATURAL_LOG';
    static CBRT = 'CBRT';
    static FACTORIAL = 'FACTORIAL';
    static SIN = 'SIN';
    static COS = 'COS';
    static TAN = 'TAN';


    executeMC(): Action {
        return {
            type: MemoryActions.EXECUTE_MC,
            payload: null
        };
    }

    executeMR(): Action {
        return {
            type: MemoryActions.EXECUTE_MR,
            payload: null
        };
    }

    executeMS(): Action {
        return {
            type: MemoryActions.EXECUTE_MS,
            payload: null
        };
    }

    executeMPlus(): Action {
        return {
            type: MemoryActions.EXECUTE_MPLUS,
            payload: null
        };
    }

    executeMMinus(): Action {
        return {
            type: MemoryActions.EXECUTE_MMINUS,
            payload: null
        };
    }

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

    plusMinus(): Action {
        return {
            type: MemoryActions.PLUS_MINUS,
            payload: null
        };
    }

    sqrt(): Action {
        return {
            type: MemoryActions.SQRT,
            payload: null
        };
    }

    percentage(): Action {
        return {
            type: MemoryActions.PERCENTAGE,
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

    addPI(): Action {
        return {
            type: MemoryActions.ADD_PI,
            payload: null
        };
    }

    square(): Action {
        return {
            type: MemoryActions.SQUARE,
            payload: null
        };
    }

    cube(): Action {
        return {
            type: MemoryActions.CUBE,
            payload: null
        };
    }

    naturalLogarithm(): Action {
        return {
            type: MemoryActions.NATURAL_LOG,
            payload: null
        };
    }

    cbrt(): Action {
        return {
            type: MemoryActions.CBRT,
            payload: null
        };
    }

    factorial(): Action {
        return {
            type: MemoryActions.FACTORIAL,
            payload: null
        };
    }

    sin(): Action {
        return {
            type: MemoryActions.SIN,
            payload: null
        };
    }

    cos(): Action {
        return {
            type: MemoryActions.COS,
            payload: null
        };
    }

    tan(): Action {
        return {
            type: MemoryActions.TAN,
            payload: null
        };
    }
}
