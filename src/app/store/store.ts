// import { Action } from 'redux';
import {MemoryActions} from './app.actions';
import {Action} from './action';

export interface MemoryState {
    memory: string;
}

export const INITIAL_STATE: MemoryState = {
    memory: '',
};

export function rootReducer(lastState: MemoryState, Action: Action): MemoryState {
    switch (Action.type) {
        case MemoryActions.CLEAR:
            return {memory: ''};
        case MemoryActions.BACKSPACE:
            return {memory: lastState.memory.slice(0, -1)};
        case MemoryActions.ADD_SYMBOL:
            return {memory: lastState.memory + Action.payload};
        case MemoryActions.ADD_OPERATOR:
            return {memory: lastState.memory + ' ' + Action.payload + ' '};
        case MemoryActions.ADD_DOT:
            let x = lastState.memory.split(' ');
            let y = x[x.length - 1];
            if (lastState.memory === '') {
                return {memory: '0' + '.'};
            } else if (
                // lastState.memory.split(' ')[length - 1].search(RegExp(/\./) )
                // lastState.memory.search(RegExp(/\./) ) === -1
                y.search(RegExp(/\./) ) === -1
            ) {
                console.log(y.search(RegExp(/\./) ));
                return {memory: lastState.memory + '.'};
            } else {
                console.log(y.search(RegExp(/\./) ));
                return {memory: lastState.memory};
            }
        case MemoryActions.SQRT:
            return {memory: String(Math.sqrt(eval(lastState.memory)))};
        case MemoryActions.DIVISION_ONE:
            console.log(String(1 / eval(lastState.memory)));
            return {memory: String(1 / eval(lastState.memory))};
        case MemoryActions.EQUAL:
            return {memory: String(eval(lastState.memory))};
    }

    return lastState;
}
