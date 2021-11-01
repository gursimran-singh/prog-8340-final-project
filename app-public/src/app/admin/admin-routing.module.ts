import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog/blog-create/blog-create.component';
import { BlogComponent } from './blog/blog.component';
import { CoinComponent } from './coin/coin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
