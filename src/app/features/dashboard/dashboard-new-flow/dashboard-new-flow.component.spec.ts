import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewFlowComponent } from './dashboard-new-flow.component';

describe('DashboardNewFlowComponent', () => {
  let component: DashboardNewFlowComponent;
  let fixture: ComponentFixture<DashboardNewFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardNewFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNewFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
