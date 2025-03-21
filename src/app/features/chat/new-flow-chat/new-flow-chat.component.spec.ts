import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlowChatComponent } from './new-flow-chat.component';

describe('NewFlowChatComponent', () => {
  let component: NewFlowChatComponent;
  let fixture: ComponentFixture<NewFlowChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NewFlowChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFlowChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
