import {Component, Input, OnInit} from '@angular/core';
import {IAutoPark} from "../../interfaces";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auto-park',
  templateUrl: './auto-park.component.html',
  styleUrls: ['./auto-park.component.css']
})
export class AutoParkComponent implements OnInit {
  @Input()
  autoPark: IAutoPark

  constructor() { }

  ngOnInit(): void {
  }

}
