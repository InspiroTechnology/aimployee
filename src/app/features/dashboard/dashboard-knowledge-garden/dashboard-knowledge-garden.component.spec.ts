import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardKnowledgeGardenComponent } from './dashboard-knowledge-garden.component';

describe('DashboardKnowledgeGardenComponent', () => {
  let component: DashboardKnowledgeGardenComponent;
  let fixture: ComponentFixture<DashboardKnowledgeGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashboardKnowledgeGardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardKnowledgeGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
