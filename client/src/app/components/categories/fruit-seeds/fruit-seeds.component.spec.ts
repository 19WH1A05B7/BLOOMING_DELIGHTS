import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitSeedsComponent } from './fruit-seeds.component';

describe('FruitSeedsComponent', () => {
  let component: FruitSeedsComponent;
  let fixture: ComponentFixture<FruitSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
