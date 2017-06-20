import {MemoryActions} from './app.actions';
import {Action} from './action';

export interface MemoryState {
    memory: string;
}

export const INITIAL_STATE: MemoryState = {
    memory: '',
};

export function rootReducer(lastState: MemoryState, Action: Action): MemoryState {
    function fact(n) {
        return (n !== 1) ? n * fact(n - 1) : 1;
    }

    switch (Action.type) {
        case MemoryActions.EXECUTE_MC:
            localStorage.setItem('memoryCalc', '');
            return {memory: lastState.memory};
        case MemoryActions.EXECUTE_MR:
            if (!localStorage.getItem('memoryCalc')) {
                return {memory: lastState.memory};
            } else {
                lastState.memory = localStorage.getItem('memoryCalc');
                return {memory: lastState.memory};
            }
        case MemoryActions.EXECUTE_MS:
            let toMemory = eval(lastState.memory);
            localStorage.setItem('memoryCalc', toMemory);
            return {memory: lastState.memory};
        case MemoryActions.EXECUTE_MPLUS:
            if (localStorage.getItem('memoryCalc')) {
                let memoryPlus = eval(lastState.memory) + Number(localStorage.getItem('memoryCalc'));
                localStorage.setItem('memoryCalc', memoryPlus);
                return {memory: lastState.memory};
            } else {
                localStorage.setItem('memoryCalc', lastState.memory);
                return {memory: lastState.memory};
            }
        case MemoryActions.EXECUTE_MMINUS:
            if (localStorage.getItem('memoryCalc')) {
                let memoryMinus = String(Number(localStorage.getItem('memoryCalc')) - eval(lastState.memory));
                localStorage.setItem('memoryCalc', memoryMinus);
                return {memory: lastState.memory};
            } else {
                return {memory: lastState.memory};
            }
        case MemoryActions.CLEAR:
            return {memory: ''};
        case MemoryActions.BACKSPACE:
            if (lastState.memory.charAt(lastState.memory.length - 1) === ' ') {
                return {memory: lastState.memory.slice(0, -2)};
            } else {
                return {memory: lastState.memory.slice(0, -1)};
            }
        case MemoryActions.PLUS_MINUS:
            let firstSymbol = lastState.memory.split(' ')[0];
            if (firstSymbol.match(/-/)) {
                return {memory: firstSymbol.charAt(1) + ' ' + String(lastState.memory.split(' ').slice(1).join(' '))};
            } else {
                return {memory: '-' + lastState.memory};
            }
        case MemoryActions.ADD_SYMBOL:
            return {memory: lastState.memory + Action.payload};
        case MemoryActions.ADD_OPERATOR:
            if (lastState.memory === '' || lastState.memory.charAt(lastState.memory.length - 1) === ' ') {
                return {memory: lastState.memory};
            } else {
                return {memory: lastState.memory + ' ' + Action.payload + ' '};
            }
        case MemoryActions.ADD_DOT:
            let stringToArrayDot = lastState.memory.split(' ');
            let lastElement = stringToArrayDot[stringToArrayDot.length - 1];
            if (lastState.memory === '') {
                return {memory: '0' + '.'};
            } else if (lastElement.search(RegExp(/\./)) === -1) {
                return {memory: lastState.memory + '.'};
            } else {
                return {memory: lastState.memory};
            }
        case MemoryActions.ADD_PI:
            if (lastState.memory === '') {
                return {memory: String(Math.PI)};
            } else if (lastState.memory.charAt(lastState.memory.length - 1) === ' ') {
                return {memory: lastState.memory + String(Math.PI)};
            } else {
                return {memory: lastState.memory + ' ' + '*' + ' ' + String(Math.PI)};
            }
        case MemoryActions.SQRT:
            return {memory: String(Math.sqrt(eval(lastState.memory)))};
        case MemoryActions.PERCENTAGE:
            let expressionParts = eval(lastState.memory.split(' ').slice(0, -2).join(''));
            return {
                memory: String(expressionParts + expressionParts * Number(lastState.memory.split(' ')[lastState.memory.split(' ').length - 1]) / 100)
            };
        case MemoryActions.DIVISION_ONE:
            return {memory: String(1 / eval(lastState.memory))};
        case MemoryActions.EQUAL:
            return {memory: String(eval(lastState.memory))};
        case MemoryActions.SQUARE:
            let squareExpressionPart = eval(lastState.memory);
            return {memory: String(squareExpressionPart * squareExpressionPart)};
        case MemoryActions.CUBE:
            let cubeExpressionPart = eval(lastState.memory);
            return {memory: String(cubeExpressionPart * cubeExpressionPart * cubeExpressionPart)};
        case MemoryActions.NATURAL_LOG:
            return {memory: String(Math.log(eval(lastState.memory)))};
        case MemoryActions.CBRT:
            return {memory: String(Math.cbrt(eval(lastState.memory)))};
        case MemoryActions.FACTORIAL:
            let factorialResult = fact(eval(lastState.memory));
            return {memory: String(factorialResult)};
        case MemoryActions.SIN:
            return {memory: String(Math.sin(eval(lastState.memory)))};
        case MemoryActions.COS:
            return {memory: String(Math.cos(eval(lastState.memory)))};
        case MemoryActions.TAN:
            return {memory: String(Math.tan(eval(lastState.memory)))};
    }

    return lastState;
}
