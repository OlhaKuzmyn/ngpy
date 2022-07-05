import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {AutoParksComponent} from "./components/auto-parks/auto-parks.component";
import {CarsComponent} from "./components/cars/cars.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'autoparks', component: AutoParksComponent},
      {path: 'cars', component: CarsComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
