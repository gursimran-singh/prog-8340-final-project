import { Injectable } from '@angular/core';
import { coin } from '../models/coin';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class CoinService {
  private coinURl = 'http://localhost:3000/api/coins';
  private featuredCoinURl = 'http://localhost:3000/api/featuredCoins';
  

  constructor(private http: HttpClient) { }

  getCoins(): Promise<void | coin[]> {
    return this.http.get(this.coinURl)
      .toPromise()
      .then(response => response as coin[])
      .catch(this.handleError);
  }

  getFeaturedCoins(): Promise<void | coin[]> {
    return this.http.get(this.featuredCoinURl)
      .toPromise()
      .then(response => response as coin[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error.error);
  }
}
