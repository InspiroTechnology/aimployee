import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFlowChatComponent } from '../../chat/new-flow-chat/new-flow-chat.component';

@Component({
  selector: 'app-dashboard-new-flow',
  standalone: true,
  imports: [CommonModule, NewFlowChatComponent],
  templateUrl: './dashboard-new-flow.component.html',
  styleUrls: ['./dashboard-new-flow.component.scss'],
})
export class DashboardNewFlowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
