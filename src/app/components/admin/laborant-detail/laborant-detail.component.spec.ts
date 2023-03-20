import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborantDetailComponent } from './laborant-detail.component';

describe('LaborantDetailComponent', () => {
  let component: LaborantDetailComponent;
  let fixture: ComponentFixture<LaborantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborantDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
