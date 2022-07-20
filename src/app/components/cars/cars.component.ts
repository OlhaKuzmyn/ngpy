import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsAutoparksService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]
  page: number = 1
  constructor(private carService:CarsAutoparksService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => {
      let params = new HttpParams().set('page', this.page)
      if (value['page']!== undefined) {
        this.page = +value['page']
        params = new HttpParams().set('page', this.page)
      }
      this.carService.getCars(params).subscribe(value => this.cars = value.data)
    })
  }

  previous() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page -= 1}}
    ).then()
  }

  next() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page += 1}}
    ).then()
  }
}
