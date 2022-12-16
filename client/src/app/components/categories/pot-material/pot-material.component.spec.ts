import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotMaterialComponent } from './pot-material.component';

describe('PotMaterialComponent', () => {
  let component: PotMaterialComponent;
  let fixture: ComponentFixture<PotMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
