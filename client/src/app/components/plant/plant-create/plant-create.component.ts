// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

// Router
import { Router } from '@angular/router';

// Services
import { PlantService } from '../../../core/services/plant.service';

// Custom Validators
import { isUrlValidator } from '../../../core/directives/is-url.directive';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.css']
})
export class PlantCreateComponent implements OnInit {
  createPlantForm: FormGroup;

  constructor(
    private router: Router,
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    this.createPlantForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'vendor': new FormControl('', [
        Validators.required
      ]),
      'product_category': new FormControl('', [
        Validators.required
      ]),

      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'cover': new FormControl('', [
        Validators.required,
        isUrlValidator
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0)
      ])
    });
  }

  onSubmit(): void {
    this.plantService
      .createPlant(this.createPlantForm.value)
      .subscribe((res) => {
        this.router.navigate([`/plant/details/${res.data._id}`]);
      });
  }

  get title(): AbstractControl {
    return this.createPlantForm.get('title');
  }

  get vendor(): AbstractControl {
    return this.createPlantForm.get('vendor');
  }

  get product_category(): AbstractControl {
    return this.createPlantForm.get('product_category');
  }
  get description(): AbstractControl {
    return this.createPlantForm.get('description');
  }
  
  get cover(): AbstractControl {
    return this.createPlantForm.get('cover');
  }

  get price(): AbstractControl {
    return this.createPlantForm.get('price');
  }

}
