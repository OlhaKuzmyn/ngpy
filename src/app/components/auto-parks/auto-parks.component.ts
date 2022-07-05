import { Component, OnInit } from '@angular/core';
import {IAutoPark} from "../../../interfaces";
import {CarsAutoparksService} from "../../services";

@Component({
  selector: 'app-auto-parks',
  templateUrl: './auto-parks.component.html',
  styleUrls: ['./auto-parks.component.css']
})
export class AutoParksComponent implements OnInit {
  autoParks : IAutoPark[]
  constructor(private autoparksService:CarsAutoparksService) { }

  ngOnInit(): void {
    this.autoparksService.getAutoParks().subscribe(value => this.autoParks = value)
  }

}
