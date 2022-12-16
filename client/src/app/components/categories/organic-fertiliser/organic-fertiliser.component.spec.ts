import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicFertiliserComponent } from './organic-fertiliser.component';

describe('OrganicFertiliserComponent', () => {
  let component: OrganicFertiliserComponent;
  let fixture: ComponentFixture<OrganicFertiliserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicFertiliserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicFertiliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
