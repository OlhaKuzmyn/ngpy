import {IAutoPark} from "./auto_park.interface";

export interface IAutoParkPage {
  total_items: number
  total_pages: number
  previous: string | null
  next: string | null
  data: IAutoPark[]
}
