import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwiComponent } from './dwi.component';

describe('DwiComponent', () => {
  let component: DwiComponent;
  let fixture: ComponentFixture<DwiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
