import { Component, OnInit } from '@angular/core';
import {IAutoPark, ICar} from "../../interfaces";
import {CarsAutoparksService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auto-parks',
  templateUrl: './auto-parks.component.html',
  styleUrls: ['./auto-parks.component.css']
})
export class AutoParksComponent implements OnInit {
  autoParks : IAutoPark[]
  form: FormGroup
  carForm:FormGroup
  autoParkForUpdate: IAutoPark | null
  constructor(private autoparksService:CarsAutoparksService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.autoparksService.getAutoParks().subscribe(value => this.autoParks = value.data)
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
}
