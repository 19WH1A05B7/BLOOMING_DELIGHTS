import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloweringPlantsComponent } from './flowering-plants.component';

describe('FloweringPlantsComponent', () => {
  let component: FloweringPlantsComponent;
  let fixture: ComponentFixture<FloweringPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloweringPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloweringPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
