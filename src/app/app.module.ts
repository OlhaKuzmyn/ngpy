import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { ActivateComponent } from './app-components/activate/activate.component';
import { PostRegisterComponent } from './app-components/post-register/post-register.component';
import {MainInterceptor} from "./main.interceptor";
import {AuthService} from "./services/auth.service";
import { AutoParkFullComponent } from './components/auto-park-full/auto-park-full.component';
import {AutoParkResolver} from "./services/resolvers/auto-park.resolver";
import { ResetPasswordComponent } from './app-components/reset-password/reset-password.component';

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
    HeaderComponent,
    ActivateComponent,
    PostRegisterComponent,
    AutoParkFullComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor

    },
    CarsAutoparksService,
    AuthService,
    AutoParkResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
