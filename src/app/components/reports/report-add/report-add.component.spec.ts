import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAddComponent } from './report-add.component';

describe('ReportAddComponent', () => {
  let component: ReportAddComponent;
  let fixture: ComponentFixture<ReportAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
