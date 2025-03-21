import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-message-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
