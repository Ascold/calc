import {Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store'; // <- New
import {MemoryActions} from '../../store/app.actions';
import {MemoryState} from '../../store/store';
import {Action} from '../../store/action'; // <- New


@Component({
    selector: 'app-main-keyboard',
    templateUrl: './main-keyboard.component.html',
    styleUrls: ['./main-keyboard.component.css']
})
export class MainKeyboardComponent {

    constructor(                           // <- New
        private ngRedux: NgRedux<MemoryState>, // <- New
        private actions: MemoryActions) {
    }  // <- New

    clear() {
        this.ngRedux.dispatch(this.actions.clear()); // <- New
    }

    backspace() {
        this.ngRedux.dispatch(this.actions.backspace()); // <- New
    }

    addSymbol(symbol) {
        this.ngRedux.dispatch(this.actions.addSymbol(symbol)); // <- New
    }

    addDot(dot) {
        this.ngRedux.dispatch(this.actions.addDot(dot)); // <- New
    }

    sqrt() {
        this.ngRedux.dispatch(this.actions.sqrt()); // <- New
    }

    equal() {
        this.ngRedux.dispatch(this.actions.equal()); // <- New
    }

}
