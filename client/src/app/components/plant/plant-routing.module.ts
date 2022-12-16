// Decorators
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';

// Components
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantDeleteComponent } from './plant-delete/plant-delete.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantStoreComponent } from './plant-store/plant-store.component';
// Guards
import { IsAdminGuard } from '../../core/guards/is-admin.guard';

const plantRoutes: Routes = [
  {
    path: '',
    redirectTo: 'store/default',
    pathMatch: 'full'
  },
  {
    path: 'store/:query',
    component: PlantStoreComponent
  },
  {
    path: 'details/:plantId',
    component: PlantDetailsComponent
  },
  {
    path: 'create',
    canActivate: [IsAdminGuard],
    component: PlantCreateComponent
  },
  {
    path: 'edit/:plantId',
    canActivate: [IsAdminGuard],
    component: PlantEditComponent
  },
  {
    path: 'delete/:plantId',
    canActivate: [IsAdminGuard],
    component: PlantDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(plantRoutes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
