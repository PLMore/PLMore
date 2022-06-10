import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBlueComponent } from './generic-blue.component';

describe('GenericBlueComponent', () => {
  let component: GenericBlueComponent;
  let fixture: ComponentFixture<GenericBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericBlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
