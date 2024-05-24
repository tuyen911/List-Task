import { ListTaskComponent } from './pages/list-task/list-task.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { FooterComponent } from './pages/navbar/footer/footer.component';
import { HeaderComponent } from './pages/navbar/header/header.component';
import { LoaderComponent } from './pages/navbar/loader/loader.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { UsersPageComponent } from './pages/users-page-craete/users-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';












@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomePageComponent,
    AboutPageComponent,
    UsersPageComponent,
    SuccessPageComponent,
    NavbarComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    PageUserComponent,
    ListTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
