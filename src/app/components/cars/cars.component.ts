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
  priceLess: number
  tot_pages: number
  tot_results: number
  constructor(private carService:CarsAutoparksService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => {
      let params = new HttpParams().set('page', this.page)
      if (value['page']!== undefined) {
        this.page = +value['page']
        params = new HttpParams().set('page', this.page)
        if (value['price_lt']) {
          this.priceLess = +value['price_lt']
          params = new HttpParams().set('price_lt', this.priceLess)
        }
      }
      this.carService.getCars(params).subscribe(value => {
        this.cars = value.data
        this.tot_pages = value.total_pages
        this.tot_results = value.total_items
      }
      )
    })
  }

  previous() {
    if(this.priceLess) {
      this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page -= 1, price_lt: this.priceLess}}
    ).then()
    }
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page -= 1}}
    ).then()
  }

  next() {
    if(this.priceLess) {
      this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page += 1, price_lt: this.priceLess}}
    ).then()
    }
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page += 1}}
    ).then()
  }

  price_lt() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams:{page: this.page, price_lt: 70000}}
    ).then()
  }

  plusThsd() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams:{page: this.page, price_lt: this.priceLess +=1000}}
    ).then()

  }

  minusThsd() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams:{page: this.page, price_lt: this.priceLess -=1000}}
    ).then()

  }
}
