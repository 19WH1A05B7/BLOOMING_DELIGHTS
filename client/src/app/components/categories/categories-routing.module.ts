import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlantTypeComponent } from './plant-type/plant-type.component';
import { PebblesComponent } from './pebbles/pebbles.component';
import { FloweringPlantsComponent } from './flowering-plants/flowering-plants.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { OrganicFertiliserComponent } from './organic-fertiliser/organic-fertiliser.component';
import { PottingsoilComponent } from './pottingsoil/pottingsoil.component';
import { PotMaterialComponent } from './pot-material/pot-material.component';
import { PotsizeComponent } from './potsize/potsize.component';
import { VegetableSeedsComponent } from './vegetable-seeds/vegetable-seeds.component';
import { FruitSeedsComponent } from './fruit-seeds/fruit-seeds.component';

const routes: Routes = [
  {
    path: 'planttype',
    component: PlantTypeComponent
  },
  {
    path: 'pebbles',
    component: PebblesComponent
  },
  {
    path: 'floweringplants',
    component: FloweringPlantsComponent
  },
  {
    path: 'flowerseeds',
    component: FlowerSeedsComponent
  },
  {
    path: 'organicfertiliser',
    component: OrganicFertiliserComponent
  },
  {
    path: 'pottingsoil',
    component : PottingsoilComponent
  },
  {
    path: 'potsize',
    component : PotsizeComponent
  },
  {
    path: 'potmaterial',
    component : PotMaterialComponent
  },
  {
    path: 'vegetableseeds',
    component : VegetableSeedsComponent
  },
  {
    path: 'fruitseeds',
    component : FruitSeedsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule {


 }
