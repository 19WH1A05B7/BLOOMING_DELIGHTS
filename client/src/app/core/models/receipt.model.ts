import { User } from './user.model';
import { Plant } from './plant.model';

export class Receipt {
  constructor(
    public user: User,
    public productsInfo: Plant[],
    public totalPrice: number
  ) { }
}
