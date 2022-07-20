import { Component, OnInit } from '@angular/core';
import {IAutoPark} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CarsAutoparksService} from "../../services";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auto-park-full',
  templateUrl: './auto-park-full.component.html',
  styleUrls: ['./auto-park-full.component.css']
})
export class AutoParkFullComponent implements OnInit {
  autoPark: IAutoPark
  showForm: boolean = false
  showCarForm: boolean = false
  form: FormGroup
  carForm:FormGroup
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private autoparksService:CarsAutoparksService) {
    this._createForm()
    this._createFormCar()
  }

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

  _createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null)
    })
  }

  _createFormCar(): void {
    this.carForm = new FormGroup({
      brand: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null),
    })
  }

  showFormClick() {
    this.showForm = !this.showForm

  }

  updateName() {
    this.autoparksService.updateAutoParkByID(this.autoPark.id, this.form.value).subscribe(value => {
      this.autoPark = value
      this.form.reset()
    })
  }

  deleteAutoPark(): void {
    this.autoparksService.deleteAutoPark(this.autoPark.id).subscribe()
  }

  showCarFormClick() {
    this.showCarForm =!this.showCarForm
  }

  addCar(): void {
    this.autoparksService.createCar(this.autoPark.id,this.carForm.value).subscribe()
  }

}
