import { User } from './user.model';
import { Plant } from './plant.model';

export class Comment {
  constructor(
    public _id: string,
    public user: User,
    public content: string,
    public plant: Plant,
    public creationDate?: Date
  ) { }
}
