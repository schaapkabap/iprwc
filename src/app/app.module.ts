import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {ProjectModule} from './pages/project/project.module';
import {RegisterComponent} from './pages/register/register.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product/product-detail/product-detail.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {AuthenicationService} from './shared/services/authenication.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from './shared/interceptor/basic.interceptor';
import {ErrorInterceptor} from './shared/interceptor/error.interceptor';
import {SharedModule} from './shared/shared.module';
import {SideBarModule} from './shared/components/side-bar/side-bar.module';
import {HeaderModule} from './shared/components/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SideBarModule,
    HeaderModule,
    ProjectModule,
    SharedModule,
    PagesModule

  ],
  providers: [
    AuthenicationService,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {
}
