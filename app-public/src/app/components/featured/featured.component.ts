import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { coin } from '../../models/coin';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  providers: [CoinService]
})
export class FeaturedComponent implements OnInit {
  coins: coin[] = [];
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService
      .getFeaturedCoins()
      .then((coins: void | coin[]) => {
        if (!coins) {
          return;
        }
        this.coins = coins;
      });
  }

}
