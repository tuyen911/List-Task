


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { UsersPageComponent } from './pages/users-page-craete/users-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PageUserComponent } from './pages/page-user/page-user.component';



const routes: Routes = [
  {path: '', component: HomePageComponent, title:'Home-page'},
  {path: 'about-page', component: AboutPageComponent, title:'About-page'},
  {path: 'users-page', component: UsersPageComponent, title:'Users-page'},
  {path: 'success-page', component: SuccessPageComponent, title:'Success-page'},
  {path: 'page-user', component: PageUserComponent, title:'page-user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
