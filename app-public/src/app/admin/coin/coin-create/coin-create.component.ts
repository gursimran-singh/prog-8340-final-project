import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin-create',
  templateUrl: './coin-create.component.html',
  styleUrls: ['./coin-create.component.css'],
  providers: [CoinService]
})
export class CoinCreateComponent implements OnInit {
  form!: FormGroup;
  title = 'Create New Coin';
  id!: string;
  isAddMode!: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['coinid'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this.title = 'Update Coin';
    }

    this.form = this.fb.group({
      name: [null, Validators.required],
      marketCap: [null, Validators.required],
      quantity: [null, Validators.required],
      volume: [null, Validators.required],
      abbre: [null, Validators.required],
      price: [null,Validators.required],
      isFeatured: [false, Validators.required]
    });

    if (!this.isAddMode) {
      this.coinService
        .getSingleCoin(this.id)
        .then((x) => this.form.patchValue(x));
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isAddMode) {
      this.coinService
        .createCoin(this.form.value)
        .then(() => {
          this.router.navigate(['/admin/coins']);
        })
        .catch(this.handleError);
    } else {
      this.coinService
        .updateCoin(this.id, this.form.value)
        .then(() => {
          this.router.navigate(['/admin/coins']);
        })
        .catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.log('error: ', error);
  }
}