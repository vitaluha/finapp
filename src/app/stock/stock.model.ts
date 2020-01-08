export class Stock {
  symbol: string;
  profile: {
    price: number;
    beta: number;
    volAvg: number;
    mktCap: number;
    lastDiv: number;
    range: string;
    changes: number;
    changesPercentage: string;
    companyName: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    ceo: string;
    sector: string;
    image: string;
  };

  constructor(stock: Stock) {
    this.symbol = stock.symbol;
    this.profile = stock.profile;
  }
}
