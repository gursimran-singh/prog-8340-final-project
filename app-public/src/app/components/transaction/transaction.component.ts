import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../models/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [TransactionService]
})
export class TransactionComponent implements OnInit {

  isAddFg: boolean = true;
  form!: FormGroup;
  loading = false;
  submitted = false;


  constructor(private trsanctionService: TransactionService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {


    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      email: [null, Validators.required],
      plan: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });




  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.createNewBook();
  }


  private createNewBook() {
    this.trsanctionService.createTransaction(this.form.value)
      .then(() => {
       // this.router.navigate([""]);
      });
  }



}
