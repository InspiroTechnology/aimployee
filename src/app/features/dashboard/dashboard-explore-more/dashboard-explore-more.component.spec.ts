import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExploreMoreComponent } from './dashboard-explore-more.component';

describe('DashboardExploreMoreComponent', () => {
  let component: DashboardExploreMoreComponent;
  let fixture: ComponentFixture<DashboardExploreMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardExploreMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExploreMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
