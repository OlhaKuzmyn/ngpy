import {Component, Input, OnInit} from '@angular/core';
import {IAutoPark} from "../../interfaces";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auto-park',
  templateUrl: './auto-park.component.html',
  styleUrls: ['./auto-park.component.css']
})
export class AutoParkComponent implements OnInit {
  @Input()
  autoPark: IAutoPark

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  autoParkFull(): void {
    this.router.navigate([this.autoPark.id], {
      relativeTo: this.activatedRoute,
      state: {autoPark: this.autoPark}
    }).then()
  }
}
