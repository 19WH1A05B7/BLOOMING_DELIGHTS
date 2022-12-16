// Decorators and Lifehooks
import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Router
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { PlantService } from '../../../core/services/plant.service';

@Component({
  selector: 'app-plant-delete',
  templateUrl: './plant-delete.component.html',
  styleUrls: ['./plant-delete.component.css']
})
export class PlantDeleteComponent implements OnInit {
  deletePlantForm: FormGroup;
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
        this.deletePlantForm.patchValue({ ...res.data });
      });
  }

  initForm(): void {
    this.deletePlantForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'vendor': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.min(0)
      ])
    });
  }

  onSubmit(): void {
   this.plantService
      .deletePlant(this.id)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

}
