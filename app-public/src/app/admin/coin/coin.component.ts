import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { coin } from 'src/app/models/coin';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css'],
  providers: [CoinService],
})
export class CoinComponent implements OnInit {
  coins: coin[] = [];
  constructor(private coinService: CoinService, private router: Router) {}

  ngOnInit(): void {
    this.coinService.getCoins().then((coins) => (this.coins = coins));
  }

  deleteCoin(id: string, name: string) {
    if (confirm('Are you sure to delete the coin "' + name + '"')) {
      this.coinService.deleteCoin(id).then(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/admin/blogs']);
      });
    } else {
      return;
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}
