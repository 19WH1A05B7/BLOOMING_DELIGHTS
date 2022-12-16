// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

// Router
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { PlantService } from '../../../core/services/plant.service';

// Custom Validators
import { isUrlValidator } from '../../../core/directives/is-url.directive';

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.css']
})
export class PlantEditComponent implements OnInit {
  editPlantForm: FormGroup;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.id = this.route.snapshot.paramMap.get('plantId');

    this.plantService
      .getSinglePlant(this.id)
      .subscribe((res) => {
        this.editPlantForm.patchValue({ ...res.data });
      });
  }

  initForm(): void {
    this.editPlantForm = new FormGroup({
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
      .editPlant(this.id, this.editPlantForm.value)
      .subscribe((res) => {
        this.router.navigate([`/plant/details/${res.data._id}`]);
      });
  }

  get title(): AbstractControl {
    return this.editPlantForm.get('title');
  }

  get vendor(): AbstractControl {
    return this.editPlantForm.get('vendor');
  }

  get product_category(): AbstractControl {
    return this.editPlantForm.get('product_category');
  }

  get description(): AbstractControl {
    return this.editPlantForm.get('description');
  }

  get cover(): AbstractControl {
    return this.editPlantForm.get('cover');
  }

  get price(): AbstractControl {
    return this.editPlantForm.get('price');
  }

}
