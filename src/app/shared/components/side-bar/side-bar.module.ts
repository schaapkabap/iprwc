import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SideBarComponent,

  ]
})
export class SideBarModule {
}
