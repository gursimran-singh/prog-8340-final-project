import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CoinComponent } from './coin/coin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogCreateComponent } from './blog/blog-create/blog-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoinCreateComponent } from './coin/coin-create/coin-create.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PlanComponent } from './plan/plan.component';
import { CreatePlanComponent } from './plan/create-plan/create-plan.component';


@NgModule({
  declarations: [
    CoinComponent,
    DashboardComponent,
    BlogComponent,
    BlogCreateComponent,
    CoinCreateComponent,
    TransactionComponent,
    PlanComponent,
    CreatePlanComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
