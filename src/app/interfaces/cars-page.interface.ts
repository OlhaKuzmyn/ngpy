import {ICar} from "./car.interface";

export interface ICarPage {
  total_items: number
  total_pages: number
  previous: string | null
  next: string | null
  data: ICar[]
}
