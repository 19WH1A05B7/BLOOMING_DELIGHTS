// Decorators
import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../core/shared/shared.module';
import { PlantRoutingModule } from './plant-routing.module';

// Components
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantDeleteComponent } from './plant-delete/plant-delete.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { PlantStoreComponent } from './plant-store/plant-store.component';

@NgModule({
  declarations: [
    PlantCreateComponent,
    PlantEditComponent,
    PlantDeleteComponent,
    PlantDetailsComponent,
    PlantStoreComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PlantRoutingModule
  ],
})
export class PlantModule { }
