import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
