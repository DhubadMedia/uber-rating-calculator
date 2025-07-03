import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UberRating } from './uber-rating';

describe('UberRating', () => {
  let component: UberRating;
  let fixture: ComponentFixture<UberRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UberRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UberRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
