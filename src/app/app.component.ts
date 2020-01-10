import { Component } from '@angular/core';
import { Stock } from './stock/stock.model';
import { ApiService } from './api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      return;
    }
    this.api.getStock(ticker).subscribe(data => {
      if (!data || !data.profile) {
        console.log();
        this.showStockSnackBar('Stock not found');
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
    return 'red';
  }
}
