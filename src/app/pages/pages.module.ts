import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {ProfileComponent} from './profile/profile.component';
import {SideBarModule} from '../shared/components/side-bar/side-bar.module';
import {HeaderModule} from '../shared/components/header/header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    LoginModule,
    SideBarModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {
}
