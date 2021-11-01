import { Injectable } from '@angular/core';
import { coin } from '../models/coin';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class CoinService {
  private coinURl = 'http://localhost:3000/api/coins';

  constructor(private http: HttpClient) { }
  getCoins(): Promise<void | coin[]> {
    return this.http.get(this.coinURl)
      .toPromise()
      .then(response => response as coin[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errorMessage = '';

    // client-side error

    console.log(error.error);

    // } else {

    //   // server-side error

    //   errorMessage = Error Code: ${error.status}\nMessage: ${error.message};

    // }

    //window.alert(errorMessage);


  }
}
