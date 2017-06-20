import { Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store/lib/src';
import {MemoryState} from '../../store/store';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent  {
    memory: string;
    subscription;

    constructor(
        private ngRedux: NgRedux<MemoryState>) {
        this.subscription = ngRedux.select<string>('memory')
            .subscribe(newCount => this.memory = newCount);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
