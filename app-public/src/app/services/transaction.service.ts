import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TransactionService {

  private transactionURl = 'http://localhost:3000/api/transactions';

  constructor(private http: HttpClient) { }

 createTransaction(newTran:Transaction):Promise<void | Transaction>
  {
    console.log(newTran);
    return this.http.post(this.transactionURl,newTran)
    .toPromise()
    .then(response => response as Transaction)
    .catch(this.handleError);
  }

  getTransactions(): Promise<Transaction[]> {
    return this.http
      .get(this.transactionURl)
      .toPromise()
      .then((response) => {
        return response as Transaction[];
      });
  }


  private handleError(error: any) {
    console.log(error.error);
  }
}
