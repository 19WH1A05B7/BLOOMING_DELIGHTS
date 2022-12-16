// Decorators
import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { CommentComponent } from './comment/comment.component';
import { CartComponent } from './cart/cart.component';
import { PlantComponent } from './plant/plant.component';

// Directives
import { MustMatchDirective } from '../directives/must-match.directive';
import { IsUrlDirective } from '../directives/is-url.directive';

// Pipes
import { CommentTimePipe } from '../pipes/comment-time.pipe';
import { ShortenStringPipe } from '../pipes/shorten-string.pipe';

@NgModule({
  declarations: [
    CommentComponent,
    CartComponent,
    PlantComponent,
    MustMatchDirective,
    IsUrlDirective,
    CommentTimePipe,
    ShortenStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentComponent,
    CartComponent,
    PlantComponent,
    MustMatchDirective,
    IsUrlDirective,
    CommentTimePipe,
    ShortenStringPipe
  ]
})
export class SharedModule { }
