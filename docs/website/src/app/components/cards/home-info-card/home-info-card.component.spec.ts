import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoCardComponent } from './home-info-card.component';

describe('HomeInfoCardComponent', () => {
  let component: HomeInfoCardComponent;
  let fixture: ComponentFixture<HomeInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
