import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
