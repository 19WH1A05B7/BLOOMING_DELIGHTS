// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Services
import { PlantService } from '../../../core/services/plant.service';

// Models
import { Plant } from '../../../core/models/plant.model';

const newestPlantsQuery = '?sort={"creationDate":-1}&limit=5';
const bestRatedPlantsQuery = '?sort={"currentRating":-1}&limit=5';
const mostPurchasedPlantsQuery = '?sort={"price":-1}&limit=5';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newestPlants: Plant[];
  bestRatedPlants: Plant[];
  mostPurchasedPlants: Plant[];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService
      .search(newestPlantsQuery)
      .subscribe((res) => {
        this.newestPlants = res.data;
      });

    this.plantService
      .search(bestRatedPlantsQuery)
      .subscribe((res) => {
        this.bestRatedPlants = res.data;
      });

    this.plantService
      .search(mostPurchasedPlantsQuery)
      .subscribe((res) => {
        this.mostPurchasedPlants = res.data;
      });
  }

}
