import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { coin } from '../../models/coin';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [CoinService]
})

export class HomepageComponent implements OnInit {

  coins: coin[] = [];
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService
      .getCoins()
      .then((coins: void | coin[]) => {
        if (!coins) {
          return;
        }
        this.coins = coins;
      });
  }

}
