import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerSectionComponent } from './lower-section.component';

describe('LowerSectionComponent', () => {
  let component: LowerSectionComponent;
  let fixture: ComponentFixture<LowerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
