import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, MatInputModule], // Add MatInputModule to imports
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
