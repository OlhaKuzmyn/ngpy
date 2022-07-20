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
import {AutoParkFullComponent} from "./components/auto-park-full/auto-park-full.component";
import {AutoParkResolver} from "./services/resolvers/auto-park.resolver";
import {RecoverEmailComponent} from "./app-components/recover-email/recover-email.component";
import {ResetPasswordComponent} from "./app-components/reset-password/reset-password.component";
import {AddAvatarComponent} from "./components/add-avatar/add-avatar.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'autoparks', pathMatch: 'full'},
      {path: 'autoparks', component: AutoParksComponent, children:[
        {path: ':id', component: AutoParkFullComponent, resolve: {data: AutoParkResolver}},
        ]},
      {path: 'cars', component: CarsComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'postregister', component: PostRegisterComponent},
      {path: 'activate/:token', component: ActivateComponent},
      {path: 'resetpassword', component: RecoverEmailComponent},
      {path: 'reset/:token', component: ResetPasswordComponent},
      {path: 'addavatar', component:AddAvatarComponent}
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
