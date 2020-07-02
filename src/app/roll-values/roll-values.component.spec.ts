import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollValuesComponent } from './roll-values.component';

describe('RollValuesComponent', () => {
  let component: RollValuesComponent;
  let fixture: ComponentFixture<RollValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
