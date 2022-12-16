// Decorators
import { Component, Input } from '@angular/core';

// Models
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent {
  @Input('plant') plant: Plant;
}
