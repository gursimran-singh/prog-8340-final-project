import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './components/framework/framework.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';

@NgModule({
  declarations: [
    AppComponent, 
    FrameworkComponent, 
    HomepageComponent,
    FeaturedComponent,
    FooterBannerComponent
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
        children:[
          {
            path: '',
            component: HomepageComponent
          }
        ]
      },
    ]),
    AdminModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
