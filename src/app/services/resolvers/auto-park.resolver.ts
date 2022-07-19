import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IAutoPark} from "../../interfaces";
import {CarsAutoparksService} from "../cars-autoparks.service";

@Injectable({
  providedIn: 'root'
})
export class AutoParkResolver implements Resolve<IAutoPark> {

  constructor(private autoparksService:CarsAutoparksService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAutoPark> | Promise<IAutoPark> | IAutoPark {
    const {id} = route.params
    return this.autoparksService.getAutoParkByID(id);
  }

}
