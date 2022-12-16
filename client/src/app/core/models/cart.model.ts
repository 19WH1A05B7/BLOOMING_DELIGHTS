import { User } from './user.model';
import { Plant } from './plant.model';

export class Cart {
  constructor(
    public user: User,
    public plants: Plant[],
    public totalPrice: number
  ) { }
}
