import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {ProfileModule} from './profile/profile.module';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component: ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
