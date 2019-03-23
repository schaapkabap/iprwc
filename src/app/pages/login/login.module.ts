import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {SideBarModule} from '../../shared/components/side-bar/side-bar.module';
import {HeaderModule} from '../../shared/components/header/header.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SideBarModule,
    HeaderModule
  ]
})
export class LoginModule { }
