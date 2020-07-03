import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRollsComponent } from './saved-rolls.component';

describe('SavedRollsComponent', () => {
  let component: SavedRollsComponent;
  let fixture: ComponentFixture<SavedRollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedRollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
