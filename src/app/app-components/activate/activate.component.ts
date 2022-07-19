import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({token}) => {
      this.authService.activate(token).subscribe({
        next: () => {
          this.router.navigate(['login']).then()
        }
      })
    })
  }

}
