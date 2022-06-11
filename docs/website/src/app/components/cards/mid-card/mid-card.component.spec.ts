import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidCardComponent } from './mid-card.component';

describe('MidCardComponent', () => {
  let component: MidCardComponent;
  let fixture: ComponentFixture<MidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
