import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interfaces";
import {urls} from "../constants/urls";
import {IAutoPark} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarsAutoparksService {

  constructor(private httpClient: HttpClient) { }

  getCars(params:HttpParams): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars, {params:params})
  }

  // getAutoParks(params:HttpParams): Observable<IAutoPark[]> {
  //   return this.httpClient.get<IAutoPark[]>(urls.auto_parks, {params:params})
  // }

  getAutoParks(): Observable<IAutoPark[]> {
    return this.httpClient.get<IAutoPark[]>(urls.auto_parks)
  }

  createAutoPark(aPark:IAutoPark): Observable<IAutoPark> {
    return this.httpClient.post<IAutoPark>(urls.auto_parks, aPark)
  }

  getAutoParkByID(id:number): Observable<IAutoPark> {
    return this.httpClient.get<IAutoPark>(`${urls.auto_parks}/${id}`)
  }

  updateAutoParkByID(id:number, autoParkForUpdate: IAutoPark): Observable<IAutoPark> {
    return this.httpClient.patch<IAutoPark>(`${urls.auto_parks}/${id}`, autoParkForUpdate)
  }

  deleteAutoPark(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.auto_parks}/${id}`)
  }

  createCar(id:number, car:ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(`${urls.auto_parks}/${id}/car`, car)
  }


}
