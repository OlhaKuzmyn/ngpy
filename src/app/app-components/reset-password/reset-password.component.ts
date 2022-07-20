import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup
  constructor(private authService:AuthService, private activatedRoute:ActivatedRoute, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      password: new FormControl(null)
    })
  }

  reset(): void {
    this.activatedRoute.params.subscribe(({token})=>{
      this.authService.resetPassword(token,this.form.value).subscribe({
        next: () => {
          this.router.navigate(['login']).then()
        }
      })
    })
  }
}
