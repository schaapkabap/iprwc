import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddToCartButtonComponent} from './components/add-to-cart-button/add-to-cart-button.component';
import {BarComponent} from './components/bar/bar.component';
import {BarDirective} from './directives/bar.directive';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {SideBarModule} from './components/side-bar/side-bar.module';
import {RouterModule} from '@angular/router';
import {BarService} from './services/bar.service';


@NgModule({
  declarations: [AddToCartButtonComponent, BarComponent, BarDirective, SideBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AddToCartButtonComponent, BarComponent, BarDirective, SideBarComponent],
  entryComponents: [SideBarComponent],
  providers: [BarService]


})
export class SharedModule {
}
