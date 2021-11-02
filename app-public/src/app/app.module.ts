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
<<<<<<< HEAD
import { BlogComponent } from './admin/blog/blog.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    HomepageComponent,
    FeaturedComponent,
    FooterBannerComponent,
    BloglistComponent,
    BlogdetailsComponent,
    AboutComponent
=======

@NgModule({
  declarations: [
    AppComponent, 
    FrameworkComponent, 
    HomepageComponent,
    FeaturedComponent,
    FooterBannerComponent
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98
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
<<<<<<< HEAD
          },
          {
            path:'bloglist',
            component:BloglistComponent
          },
          {
            path: 'bloglist/:blogId',
            component: BlogdetailsComponent
          },
          {
            path: 'about',
            component: AboutComponent
          },
=======
          }
>>>>>>> 99deb4f9e1c07372bc40cb5ef50bdda459ad2b98
        ]
      },
    ]),
    AdminModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
