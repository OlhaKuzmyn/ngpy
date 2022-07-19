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
    this._createFormCar()
  }

  ngOnInit(): void {
    this.autoparksService.getAutoParks().subscribe(value => this.autoParks = value.data)
  }

  _createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
    })
  }

  _createFormCar(): void {
    this.carForm = new FormGroup({
      brand: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    })
  }

  save(): void {
    if (!this.autoParkForUpdate) {
      this.autoparksService.createAutoPark(this.form.value).subscribe(value => {
        this.autoParks.push(value)
        this.form.reset()
      })
    } else {
      this.autoparksService.updateAutoParkByID(this.autoParkForUpdate.id, this.form.value).subscribe(value => {
        const updateAutoPark = this.autoParks.find(f => f.id === this.autoParkForUpdate?.id)
        Object.assign(updateAutoPark as IAutoPark, value)
        this.autoParkForUpdate = null

      })
    }
  }

  update(autoPark: IAutoPark): void {
    this.autoParkForUpdate = autoPark
    this.form.setValue({name: autoPark.name})
  }

  delete(id:number): void {
    this.autoparksService.deleteAutoPark(id).subscribe(()=>{
      this.autoParks = this.autoParks.filter(autoPark => autoPark.id!==id)
    })
  }

  addCar(id:number): void {
    this.autoparksService.createCar(id,this.carForm.value).subscribe()
  }

}
