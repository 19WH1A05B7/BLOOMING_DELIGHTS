import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PottingsoilComponent } from './pottingsoil.component';

describe('PottingsoilComponent', () => {
  let component: PottingsoilComponent;
  let fixture: ComponentFixture<PottingsoilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PottingsoilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PottingsoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
