import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotsizeComponent } from './potsize.component';

describe('PotsizeComponent', () => {
  let component: PotsizeComponent;
  let fixture: ComponentFixture<PotsizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotsizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
