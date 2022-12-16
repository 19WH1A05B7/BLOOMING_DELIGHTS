import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableSeedsComponent } from './vegetable-seeds.component';

describe('VegetableSeedsComponent', () => {
  let component: VegetableSeedsComponent;
  let fixture: ComponentFixture<VegetableSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
