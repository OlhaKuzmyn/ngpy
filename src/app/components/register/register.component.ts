import { Component, OnInit } from '@angular/core';
import {IProfile, IUser} from "../../interfaces";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IUserLogin} from "../../interfaces/user-login.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userF: IUserLogin
  user: IUser
  profile: IProfile
  form: FormGroup
  formProfile: FormGroup
  constructor(private authService:AuthService) {
    this._createForm()
    this._createFormProfile()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      name: new FormControl(null),
      surname: new FormControl(null),
      age: new FormControl(null),
      phone: new FormControl(null),
    })
  }

  _createFormProfile(): void {
    this.formProfile = new FormGroup({
      name: new FormControl(null),
      surname: new FormControl(null),
      age: new FormControl(null),
      phone: new FormControl(null),
    })
  }

  register(): void {
    // this.userF = this.form.value
    // const profile = {profile: this.formProfile.value}
    // this.user = {...this.form.value, ...profile}
    // console.log(this.user)
    console.log(this.form);
  }


}


