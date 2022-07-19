import { Component, OnInit } from '@angular/core';
import {IProfile, IUser} from "../../interfaces";
import {AuthService} from "../../services/auth.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {IUserLogin} from "../../interfaces/user-login.interface";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userEmailError: string
  userF: IUserLogin
  user: IUser
  profile: IProfile
  form: FormGroup
  formProfile: FormGroup
  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
    // this._createFormProfile()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
      name: new FormControl(null),
      surname: new FormControl(null),
      age: new FormControl(null),
      phone: new FormControl(null),
    }, [this._checkPasswords])
  }

  // _createFormProfile(): void {
  //   this.formProfile = new FormGroup({
  //     name: new FormControl(null),
  //     surname: new FormControl(null),
  //     age: new FormControl(null),
  //     phone: new FormControl(null),
  //   })
  // }

  register(): void {
    this.userF = {email: this.form.value.email, password: this.form.value.password}
    delete this.form.value.email
    delete this.form.value.password
    delete this.form.value.confirmPassword
    this.user = {...this.userF, ...{profile: this.form.value}}
    console.log(this.user)
    this.authService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['postregister']).then()
      },
        error: e => this.userEmailError = e.error.email[0]
    }
    )
  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confermPassword = form.get('confirmPassword')
    return password?.value === confermPassword?.value ? null : {notSame:true}
  }


}


