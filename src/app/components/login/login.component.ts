import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {IToken} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    })

  }

  login(): void {
    this.authService.login(this.form.value).subscribe(value => {
      this.authService.setToken(value)
      this.router.navigate(['autoparks']).then()
    })
  }

}
