import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Stock } from './stock/stock.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'https://financialmodelingprep.com/api/v3/company/profile/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStock(ticker): Observable<Stock> {
    if (!ticker) {
      return null;
    }
    const url = apiUrl + ticker;
    return this.http.get<Stock>(url)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Stock>(`data`))
      );
  }
}
