import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {ProfileComponent} from './profile/profile.component';
import {SideBarModule} from '../shared/components/side-bar/side-bar.module';
import {HeaderModule} from '../shared/components/header/header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {LogoutComponent} from './logout/logout.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {RegisterComponent} from './register/register.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    LogoutComponent,
    ProductListComponent,
    ProductEditComponent,
    RegisterComponent,
    ProductNewComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    LoginModule,
    SideBarModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {
}
