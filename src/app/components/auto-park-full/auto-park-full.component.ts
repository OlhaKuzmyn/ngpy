import { Component, OnInit } from '@angular/core';
import {IAutoPark} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CarsAutoparksService} from "../../services";

@Component({
  selector: 'app-auto-park-full',
  templateUrl: './auto-park-full.component.html',
  styleUrls: ['./auto-park-full.component.css']
})
export class AutoParkFullComponent implements OnInit {
  autoPark: IAutoPark
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private autoparksService:CarsAutoparksService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      const state = this.router.getCurrentNavigation()?.extras?.state?.['autoPark'] as IAutoPark;
      if (state) {
        this.autoPark = state
      } else {
        this.activatedRoute.data.subscribe(({data})=>{
          this.autoPark = data
        })
        // this.autoparksService.getAutoParkByID(id).subscribe(value => this.autoPark = value)
      }
    })
  }

}
