import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantTypeComponent } from './plant-type/plant-type.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { PebblesComponent } from './pebbles/pebbles.component';
import { FloweringPlantsComponent } from './flowering-plants/flowering-plants.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { OrganicFertiliserComponent } from './organic-fertiliser/organic-fertiliser.component';
import { PottingsoilComponent } from './pottingsoil/pottingsoil.component';
import { PotsizeComponent } from './potsize/potsize.component';
import { PotMaterialComponent } from './pot-material/pot-material.component';
import { VegetableSeedsComponent } from './vegetable-seeds/vegetable-seeds.component';
import { FruitSeedsComponent } from './fruit-seeds/fruit-seeds.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    PlantTypeComponent,
    PebblesComponent,
    FloweringPlantsComponent,
    FlowerSeedsComponent,
    OrganicFertiliserComponent,
    PottingsoilComponent,
    PotsizeComponent,
    PotMaterialComponent,
    VegetableSeedsComponent,
    FruitSeedsComponent
  ]
})
export class CategoriesModule { }
