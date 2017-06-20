import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {MemoryActions} from '../../store/app.actions';
import {MemoryState} from '../../store/store';

@Component({
    selector: 'app-additional-eng-keyboard',
    templateUrl: './additional-eng-keyboard.component.html',
    styleUrls: ['./additional-eng-keyboard.component.css']
})
export class AdditionalEngKeyboardComponent {

    constructor(private ngRedux: NgRedux<MemoryState>,
                private actions: MemoryActions) {
    }

    addSymbol(symbol) {
        this.ngRedux.dispatch(this.actions.addSymbol(symbol));
    }

    addPI() {
        this.ngRedux.dispatch(this.actions.addPI());
    }

    square() {
        this.ngRedux.dispatch(this.actions.square());
    }

    cube() {
        this.ngRedux.dispatch(this.actions.cube());
    }

    naturalLogarithm() {
        this.ngRedux.dispatch(this.actions.naturalLogarithm());
    }

    cbrt() {
        this.ngRedux.dispatch(this.actions.cbrt());
    }

    factorial() {
        this.ngRedux.dispatch(this.actions.factorial());
    }

    sin() {
        this.ngRedux.dispatch(this.actions.sin());
    }

    cos() {
        this.ngRedux.dispatch(this.actions.cos());
    }

    tan() {
        this.ngRedux.dispatch(this.actions.tan());
    }

}
