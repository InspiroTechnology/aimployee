import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-flow-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-flow-chat.component.html',
  styleUrls: ['./new-flow-chat.component.scss']
})
export class NewFlowChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
