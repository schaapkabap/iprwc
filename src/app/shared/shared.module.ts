import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddToCartButtonComponent} from './components/cart/add-to-cart-button/add-to-cart-button.component';
import { CartComponent } from './components/cart/cart.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';


@NgModule({
  declarations: [AddToCartButtonComponent, CartComponent, SettingsButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AddToCartButtonComponent, SettingsButtonComponent]

})
export class SharedModule {
}
