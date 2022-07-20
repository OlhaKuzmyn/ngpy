import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsAutoparksService} from "../../services";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]
  constructor(private carService:CarsAutoparksService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value.data)
  }

}
