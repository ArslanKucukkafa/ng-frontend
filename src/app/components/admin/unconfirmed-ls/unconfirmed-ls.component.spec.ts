import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedLsComponent } from './unconfirmed-ls.component';

describe('UnconfirmedLsComponent', () => {
  let component: UnconfirmedLsComponent;
  let fixture: ComponentFixture<UnconfirmedLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnconfirmedLsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnconfirmedLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
