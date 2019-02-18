import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectModule} from './pages/project/project.module';
import {RegisterComponent} from './pages/register/register.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {AuthenicationService} from './shared/services/authenication.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from './shared/interceptor/basic.interceptor';
import {ErrorInterceptor} from './shared/interceptor/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProjectModule,
    PagesModule
  ],
  providers: [
    AuthenicationService,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
