import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup
  constructor(private authService:AuthService, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }
  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl (null)
    })
  }

  recoverPassword():void {
    console.log(this.form.value);
    this.authService.recoveryEmail(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['login']).then()
      }
    })
  }
}
