import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeroSectionComponent } from './dashboard-hero-section.component';

describe('DashboardHeroSectionComponent', () => {
  let component: DashboardHeroSectionComponent;
  let fixture: ComponentFixture<DashboardHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardHeroSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
