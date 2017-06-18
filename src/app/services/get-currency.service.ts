import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const API_URL_CURRENCY = 'https://query.yahooapis.com/v1/public/yql';

@Injectable()
export class GetCurrencyService {

    constructor(private http: Http) {
    }

    getData() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('q', 'select * from yahoo.finance.xchange where pair in ("UAH")');
        params.set('format', 'json');
        params.set('diagnostics', 'true');
        params.set('env', 'store://datatables.org/alltableswithkeys');
        // params.set('callback', '');
        return this.http.get(API_URL_CURRENCY, {search: params})
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
