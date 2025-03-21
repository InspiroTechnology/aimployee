import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-chat-settings',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.scss'],
})
export class ChatSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
