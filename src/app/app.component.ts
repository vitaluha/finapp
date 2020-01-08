import { Component } from '@angular/core';
import { Stock } from './stock/stock.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Finapp';
  stockName = '';
  stock: Stock;

  constructor(private api: ApiService) { }

  stockChange(ticker) {
    this.api.getStock(ticker)
      .subscribe(data => {
        this.stock = new Stock(data);
      });
  }
}
