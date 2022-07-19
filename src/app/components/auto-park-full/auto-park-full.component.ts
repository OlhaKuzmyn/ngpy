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
    this.activatedRoute.data.subscribe(({data})=>{
      this.autoPark = data
    })
  }

}
