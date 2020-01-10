import { Component } from '@angular/core';
import { Stock } from './stock/stock.model';
import { ApiService } from './api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as numeral from 'numeral';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Finapp';
  stockName = '';
  stock: Stock;

  constructor(private api: ApiService, private snackBar: MatSnackBar) {}

  stockChange(ticker) {
    if (!ticker) {
      this.showStockSnackBar('Please enter a stock');
      this.stock = null;
      return;
    }
    this.api.getStock(ticker).subscribe(data => {
      if (!data || !data.profile) {
        console.log();
        this.showStockSnackBar('Stock not found');
        this.stock = null;
        return;
      }
      this.stock = new Stock(data);
    });
  }
  showStockSnackBar(message) {
    this.snackBar.open(message, 'Close', {
      duration: 2000
    });
  }

  getPriceColor(change: number) {
    if (!change) {
      return 'grey';
    } else if (change > 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getFormattedNumber(value: number, format?: string) {
    if (!format) {
      format = '0.00a';
    }
    return numeral(value)
      .format(format)
      .toString()
      .toUpperCase();
  }
}
