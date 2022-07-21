import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAutoParkPage, ICar, ICarPage} from "../interfaces";
import {urls} from "../constants/urls";
import {IAutoPark} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarsAutoparksService {

  constructor(private httpClient: HttpClient) { }

  getCars(params:HttpParams): Observable<ICarPage> {
    return this.httpClient.get<ICarPage>(urls.cars, {params:params})
  }

  getAutoParks(params:HttpParams): Observable<IAutoParkPage> {
    return this.httpClient.get<IAutoParkPage>(urls.auto_parks, {params:params})
  }

  createAutoPark(aPark:IAutoPark): Observable<IAutoPark> {
    return this.httpClient.post<IAutoPark>(urls.auto_parks, aPark)
  }

  getAutoParkByID(id:string): Observable<IAutoPark> {
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

  getCarById(id:number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
  }

  updateCarById(id:number, car: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`, car)
  }

  deleteCarById(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`)
  }

  // addOwner(aId: number, uId:number): Observable<void> {
  //   return this.httpClient.patch<void>(`${urls.auto_parks}/${aId}/add_owner/${uId}`, void)
  // }


}
