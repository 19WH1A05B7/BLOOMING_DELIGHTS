// Decorators
import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { DropNavComponent } from './drop-nav/drop-nav.component';
// import { CategoriesComponent } from './categories/categories.component';
@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    TagsComponent,
    DropNavComponent,
    // CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MyCommonModule { }
