import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropNavComponent } from './drop-nav.component';

describe('DropNavComponent', () => {
  let component: DropNavComponent;
  let fixture: ComponentFixture<DropNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
