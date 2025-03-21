import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() value!: number;  

  constructor() {}

  ngOnInit(): void {}
}
