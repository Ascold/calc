import { Component, OnInit } from '@angular/core';

import {MemoryActions} from '../../store/app.actions';
import {NgRedux} from '@angular-redux/store/lib/src';
import {MemoryState} from '../../store/store';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent  {
    memory: string;
    subscription; // <- New;

    constructor(
        private ngRedux: NgRedux<MemoryState>,
        private actions: MemoryActions) {
        this.subscription = ngRedux.select<string>('memory') // <- New
            .subscribe(newCount => this.memory = newCount);    // <- New
    }

    ngOnDestroy() {                    // <- New
        this.subscription.unsubscribe(); // <- New
    }
}
