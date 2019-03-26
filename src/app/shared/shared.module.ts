import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddToCartButtonComponent} from './components/add-to-cart-button/add-to-cart-button.component';


@NgModule({
  declarations: [AddToCartButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AddToCartButtonComponent]

})
export class SharedModule {
}
