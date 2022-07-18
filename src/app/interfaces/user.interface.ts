import {IProfile} from "./profile.interface";

export interface IUser {
  id?: number
  email: string
  password: string
  profile: IProfile
}
