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
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {AdminPanelComponent} from './pages/admin-panel/admin-panel.component';
import {UserGuard} from './shared/guards/user.guard';


const routes: Routes = [

  {
    path: 'app/login',
    component: LoginComponent
  },
  {
    path: 'app/admin-panel',
    component: AdminPanelComponent,
    canActivate: [UserGuard]
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
    path: 'app/product/edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app/product/:id',
    component: ProductDetailComponent
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
    component: CheckoutComponent

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
