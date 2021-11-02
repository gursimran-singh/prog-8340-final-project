import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coin } from '../models/coin';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private coinURl = 'http://localhost:3000/api/coins';
  private featuredCoinURl = 'http://localhost:3000/api/featuredCoins';

  constructor(private http: HttpClient) {}

  getCoins(): Promise<coin[]> {
    return this.http
      .get(this.coinURl)
      .toPromise()
      .then((response) => {
        return response as coin[];
      });
  }

  getFeaturedCoins(): Promise<coin[]> {
    return this.http
      .get(this.coinURl)
      .toPromise()
      .then((response) => {
        return response as coin[];
      });
  }

  createCoin(newCoin: coin): Promise<void | coin> {
    return this.http
      .post(this.coinURl, newCoin)
      .toPromise()
      .then((response) => response as coin);
  }

  updateCoin(id: string, newCoin: coin): Promise<void | coin> {
    return this.http
      .put(this.coinURl + '/' + id, newCoin)
      .toPromise()
      .then((response) => response as coin);
  }

  deleteCoin(id: string): Promise<object> {
    return this.http.delete(this.coinURl + '/' + id).toPromise();
  }

  private handleError(error: any) {
    console.log(error.error);
  }
}
