import { Comment } from './comment.model';

export class Plant {
  filter(arg0: (plant: any) => any): Plant[] {
    throw new Error('Method not implemented.');
  }
  id: number;
  constructor(
    public _id: string,
    public title: string,
    public vendor: string,
    public product_category: string,
    public description: string,
    public cover: string,
    public price: number,
    public qty?: number,
    public creationDate?: Date,
    public currentRating?: number,
    public ratingPoints?: number,
    public ratedCount?: number,
    public purchasesCount?: number,
    public comments?: Comment[]
  ) { }
}
