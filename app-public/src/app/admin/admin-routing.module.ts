import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog/blog-create/blog-create.component';
import { BlogComponent } from './blog/blog.component';
import { CoinCreateComponent } from './coin/coin-create/coin-create.component';
import { CoinComponent } from './coin/coin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePlanComponent } from './plan/create-plan/create-plan.component';
import { PlanComponent } from './plan/plan.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'coins',
        component: CoinComponent
      },
      {
        path: 'coins/create',
        component: CoinCreateComponent
      },
      {
        path: 'coins/update/:coinid',
        component: CoinCreateComponent
      },
      {
        path: 'blogs',
        component: BlogComponent
      },
      {
        path: 'blogs/create',
        component: BlogCreateComponent
      },
      {
        path: 'blogs/update/:blogid',
        component: BlogCreateComponent
      },
      {
        path: 'transactions',
        component: TransactionComponent
      },
      {
        path: 'plans',
        component: PlanComponent
      },
      {
        path: 'plans/create',
        component: CreatePlanComponent,
      },
      {
        path: 'plans/update/:planid',
        component: CreatePlanComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
