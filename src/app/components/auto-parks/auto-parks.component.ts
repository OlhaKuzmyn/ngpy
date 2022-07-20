import { Component, OnInit } from '@angular/core';
import {IAutoPark, ICar} from "../../interfaces";
import {CarsAutoparksService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-auto-parks',
  templateUrl: './auto-parks.component.html',
  styleUrls: ['./auto-parks.component.css']
})
export class AutoParksComponent implements OnInit {
  autoParks : IAutoPark[]
  form: FormGroup
  autoParkForUpdate: IAutoPark | null
  page: number = 1
  constructor(private autoparksService:CarsAutoparksService, private activatedRoute:ActivatedRoute, private router:Router) {
    this._createForm()
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value =>{
      let params = new HttpParams().set('page', this.page)
      if (value['page']!== undefined) {
        this.page = +value['page']
        params = new HttpParams().set('page', this.page)
      }
      this.autoparksService.getAutoParks(params).subscribe(value => this.autoParks = value.data)
    })
  }

  _createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
    })
  }



  save(): void {
    this.autoparksService.createAutoPark(this.form.value).subscribe(value => {
      this.autoParks.push(value)
      this.form.reset()
    })
  }

  next() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page += 1}}
    ).then()
  }

  previous() {
    this.router.navigate([],
      {relativeTo: this.activatedRoute, queryParams: {page: this.page -= 1}}
    ).then()
  }
}
