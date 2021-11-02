import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coin as Coin } from '../models/coin';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private coinsUrl = 'http://localhost:3000/api/coins';
  constructor(private http: HttpClient) {}

  getCoins(): Promise<Coin[]> {
    return this.http
      .get(this.coinsUrl)
      .toPromise()
      .then((response) => {
        return response as Coin[];
      });
  }

  getSingleCoin(coinid: string): Promise<Coin> {
    return this.http
      .get(this.coinsUrl + '/' + coinid)
      .toPromise()
      .then((response) => response as Coin);
  }

  createCoin(newCoin: Coin): Promise<void | Coin> {
    return this.http
      .post(this.coinsUrl, newCoin)
      .toPromise()
      .then((response) => response as Coin);
  }

  updateCoin(id: string, newCoin: Coin): Promise<void | Coin> {
    return this.http
      .put(this.coinsUrl + '/' + id, newCoin)
      .toPromise()
      .then((response) => response as Coin);
  }

  deleteCoin(id: string): Promise<object> {
    return this.http.delete(this.coinsUrl + '/' + id).toPromise();
  }
}
