import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, MemoryState, INITIAL_STATE } from './store/store';
import { MemoryActions } from './store/app.actions';

import {AppComponent} from './app.component';
import {CurrencyComponent} from './components/currency/currency.component';
import {GetCurrencyService} from './services/get-currency.service';
import { CalcComponent } from './components/calc/calc.component';
import { ScreenComponent } from './components/screen/screen.component';
import { MainKeyboardComponent } from './components/main-keyboard/main-keyboard.component';
import { AdditionalEngKeyboardComponent } from './components/additional-eng-keyboard/additional-eng-keyboard.component';

@NgModule({
    declarations: [
        AppComponent,
        CurrencyComponent,
        CalcComponent,
        ScreenComponent,
        MainKeyboardComponent,
        AdditionalEngKeyboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [GetCurrencyService, MemoryActions],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<MemoryState>) {
        // Tell @angular-redux/store about our rootReducer and our initial state.
        // It will use this to create a redux store for us and wire up all the
        // events.
        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE);
    }
}
