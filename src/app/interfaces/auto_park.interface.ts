import {ICar} from "./car.interface";
import {IUser} from "./user.interface";

export interface IAutoPark {
  id: number,
  name: string,
  cars: ICar[],
  owners: IUser[]

}
