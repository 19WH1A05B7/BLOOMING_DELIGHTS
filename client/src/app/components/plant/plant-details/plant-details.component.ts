// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Router
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { PlantService } from '../../../core/services/plant.service';
import { CartService } from '../../../core/services/cart.service';
import { HelperService } from '../../../core/services/helper.service';

// Models
import { Plant } from '../../../core/models/plant.model';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant;
  plantId: string;
  userId: string;
  isLogged: boolean;
  isAdmin: boolean;
  isRated: boolean;
  isAdded: boolean;
  isBought: boolean;
  stars = ['', '', '', '', ''];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private plantService: PlantService,
    private cartService: CartService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.plantId = this.route.snapshot.paramMap.get('plantId');
    this.isLogged = this.helperService.isLoggedIn();
    this.isAdmin = this.helperService.isAdmin();
    this.userId = this.helperService.getProfile().id;

    this.plantService
      .getSinglePlant(this.plantId)
      .subscribe((res) => {
        this.plant = res.data;
        this.calcRating(this.plant.currentRating);
      });
  }

  buyPlant(): void {
    this.cartService
      .addToCart(this.plantId)
      .subscribe(() => {
        this.helperService.cartStatus.next('add');
        this.isBought = true;
      }, () => {
        this.isBought = true;
      });
  }

  addToFavorites(): void {
    this.plantService
      .addToFavourites(this.plantId)
      .subscribe(() => {
        this.isAdded = true;
      }, () => {
        this.isAdded = true;
      });
  }

  ratePlant(rating: number): void {
    if (!this.isRated) {
      this.isRated = true;
      this.plantService
        .ratePlant(this.plantId, { rating: rating })
        .subscribe((res) => {
          this.plant.currentRating = res.data.currentRating;
          this.plant.ratedCount++;
          this.calcRating(this.plant.currentRating);
        });
    }
  }

  calcRating(rating: number): void {
    this.stars = ['', '', '', '', ''];
    rating = Math.round(rating);
    for (let i = 0; i < rating; i++) {
      this.stars[i] = 'checked';
    }
  }

  resetRating(): void {
    this.calcRating(this.plant.currentRating);
  }

  login(): void {
    this.router.navigate(['/user/login']);
  }

}
