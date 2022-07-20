import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-email',
  templateUrl: './recover-email.component.html',
  styleUrls: ['./recover-email.component.css']
})
export class RecoverEmailComponent implements OnInit {
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
