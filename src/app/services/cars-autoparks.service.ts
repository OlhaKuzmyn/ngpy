import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../../interfaces/car.interface";
import {urls} from "../constants/urls";
import {IAutoPark} from "../../interfaces/auto_park.interface";

@Injectable({
  providedIn: 'root'
})
export class CarsAutoparksService {

  constructor(private httpClient: HttpClient) { }

  getCars(params:HttpParams): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars, {params:params})
  }
  getAutoParks(params:HttpParams): Observable<IAutoPark[]> {
    return this.httpClient.get<IAutoPark[]>(urls.auto_parks, {params:params})
  }
}
