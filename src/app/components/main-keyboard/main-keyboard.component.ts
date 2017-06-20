import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {MemoryActions} from '../../store/app.actions';
import {MemoryState} from '../../store/store';


@Component({
    selector: 'app-main-keyboard',
    templateUrl: './main-keyboard.component.html',
    styleUrls: ['./main-keyboard.component.css']
})
export class MainKeyboardComponent {

    constructor(private ngRedux: NgRedux<MemoryState>,
                private actions: MemoryActions) {
    }

    executeMC() {
        this.ngRedux.dispatch(this.actions.executeMC()); // <- New
    }

    executeMR() {
        this.ngRedux.dispatch(this.actions.executeMR());
    }

    executeMS() {
        this.ngRedux.dispatch(this.actions.executeMS());
    }

    executeMPlus() {
        this.ngRedux.dispatch(this.actions.executeMPlus());
    }

    executeMMinus() {
        this.ngRedux.dispatch(this.actions.executeMMinus());
    }

    clear() {
        this.ngRedux.dispatch(this.actions.clear());
    }

    backspace() {
        this.ngRedux.dispatch(this.actions.backspace());
    }

    plusMinus() {
        this.ngRedux.dispatch(this.actions.plusMinus());
    }

    addSymbol(symbol) {
        this.ngRedux.dispatch(this.actions.addSymbol(symbol));
    }

    addOperator(symbol) {
        this.ngRedux.dispatch(this.actions.addOperator(symbol));
    }

    addDot(dot) {
        this.ngRedux.dispatch(this.actions.addDot(dot));
    }

    sqrt() {
        this.ngRedux.dispatch(this.actions.sqrt());
    }

    percentage() {
        this.ngRedux.dispatch(this.actions.percentage());
    }

    divisionOne() {
        this.ngRedux.dispatch(this.actions.divisionOne());
    }

    equal() {
        this.ngRedux.dispatch(this.actions.equal());
    }

}
