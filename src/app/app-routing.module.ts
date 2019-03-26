import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ProductComponent} from './pages/product/product.component';
import {LogoutComponent} from './pages/logout/logout.component';
import {ProductDetailComponent} from './pages/product/product-detail/product-detail.component';
import {CartComponent} from './pages/cart/cart.component';
import {ProductListComponent} from './pages/product/product-list/product-list.component';
import {ProductEditComponent} from './pages/product/product-edit/product-edit.component';
import {ProductNewComponent} from './pages/product/product-new/product-new.component';
import {Auth} from './shared/models/auth.model';

const routes: Routes = [

  {
    path: 'app/login',
    component: LoginComponent
  },
  {
    path: 'app/logout',
    component: LogoutComponent
  },
  {
    path: 'app/product',
    component: ProductComponent
  },
  {
    path: 'app/product/new',
    component: ProductNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app/product/list',
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'app/product/edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app/product/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'app/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app/profile/edit',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app/cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ProductComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
