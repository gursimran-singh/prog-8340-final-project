import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './components/framework/framework.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { PlanComponent } from './components/plan/plan.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AboutCryptosComponent } from './components/about-cryptos/about-cryptos.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    HomepageComponent,
    FeaturedComponent,
    BloglistComponent,
    FooterBannerComponent,
    PlanComponent,
    TransactionComponent,
    AboutCryptosComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: FrameworkComponent,
        children: [
          {
            path: '',
            component: HomepageComponent
          },
          {
            path: 'price',
            component: PlanComponent
          }
          ,
          {
            path: 'transaction',
            component: TransactionComponent
          },
          {
            path: 'bloglist',
            component: BloglistComponent
          },
          {
            path: 'bloglist/:blogId',
            component: BlogdetailsComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'contact',
            component:ContactUsComponent
          }
        ]

      },
    ]),
    AdminModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
