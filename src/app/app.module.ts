import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {ProjectModule} from './project/project.module';
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard.module';
import {RegisterComponent} from './register/register.component';
import {InloggenComponent} from './inloggen/inloggen.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import {ProfileModule} from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    InloggenComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ProjectModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
