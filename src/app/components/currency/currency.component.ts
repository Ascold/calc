import {Component, OnInit} from '@angular/core';
import {GetCurrencyService} from '../../services/get-currency.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

    public exchangeRates;

    constructor(private GetCurrencyService: GetCurrencyService) {
    }

    ngOnInit() {
        this.GetCurrencyService.getData().subscribe(
            response => {
                try {
                    this.exchangeRates = response.query.results.rate.Rate;
                } catch (error) {
                    alert(error.message);
                }
            },
        );
    }

}
