import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-typing-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-typing-indicator.component.html',
  styleUrls: ['./chat-typing-indicator.component.scss']
})
export class ChatTypingIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
