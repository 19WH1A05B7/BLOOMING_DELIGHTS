import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSeedsComponent } from './flower-seeds.component';

describe('FlowerSeedsComponent', () => {
  let component: FlowerSeedsComponent;
  let fixture: ComponentFixture<FlowerSeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerSeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
