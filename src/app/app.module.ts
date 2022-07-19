import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AutoParksComponent } from './components/auto-parks/auto-parks.component';
import { CarsComponent } from './components/cars/cars.component';
import {CarsAutoparksService} from "./services";
import { AutoParkComponent } from './components/auto-park/auto-park.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarComponent } from './components/car/car.component';
import { HeaderComponent } from './app-components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AutoParksComponent,
    CarsComponent,
    AutoParkComponent,
    RegisterComponent,
    LoginComponent,
    CarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    CarsAutoparksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
