import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { ChatSettingsComponent } from '../chat-settings/chat-settings.component';

@Component({
  selector: 'app-new-flow-chat',
  standalone: true,
  imports: [CommonModule, ChatInputComponent, ChatSettingsComponent],
  templateUrl: './new-flow-chat.component.html',
  styleUrls: ['./new-flow-chat.component.scss'],
})
export class NewFlowChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
