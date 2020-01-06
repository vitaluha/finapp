import { Component, Input } from '@angular/core';
import { Stock } from './stock/stock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Finapp';
  stockName = '';
  stock: Stock;

  stockChange(event) {
    if (!this.stock) {
      this.stock = new Stock(event.target.value)
    }
    this.stock.symbol = event.target.value;
    // Hardcode to 10
    this.stock.price = 10;
    console.log('Your stock is ' + this.stock.symbol + '\nPrice is: ' + this.stock.price);
  }
}
