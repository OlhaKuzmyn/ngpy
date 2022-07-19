import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {AutoParksComponent} from "./components/auto-parks/auto-parks.component";
import {CarsComponent} from "./components/cars/cars.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ActivateComponent} from "./app-components/activate/activate.component";
import {PostRegisterComponent} from "./app-components/post-register/post-register.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'autoparks', pathMatch: 'full'},
      {path: 'autoparks', component: AutoParksComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'postregister', component: PostRegisterComponent},
      {path: 'activate/:token', component: ActivateComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
