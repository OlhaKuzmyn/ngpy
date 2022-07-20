import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsAutoparksService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar
  form: FormGroup
  showCarForm: boolean = false
  constructor(private carsAutoparksService:CarsAutoparksService) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void{
    this.form = new FormGroup({
      brand: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    })
  }

  updateCar() {
    this.carsAutoparksService.updateCarById(this.car.id, this.form.value).subscribe( value =>  this.car = value)
  }
  showCarFormClick() {
    this.showCarForm =!this.showCarForm
    this.form.setValue({brand: this.car.brand, price: this.car.price, year: this.car.year })
  }


  deleteCar() {
    this.carsAutoparksService.deleteCarById(this.car.id).subscribe()
  }
}
