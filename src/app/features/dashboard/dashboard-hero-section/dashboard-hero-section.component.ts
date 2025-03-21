import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-hero-section.component.html',
  styleUrls: ['./dashboard-hero-section.component.scss'],
})
export class DashboardHeroSectionComponent implements OnInit {
  @Input() slogans: string[] = []; // Accept slogans dynamically
  @Input() header: string = ''; // Accept header text dynamically
  @Input() containerClass: string = ''; // Accept custom CSS class for positioning
  @Input() containerStyle: { [key: string]: string } = {}; // Accept inline styles for positioning

  constructor() {}

  ngOnInit(): void {
    console.log(this.slogans);
    console.log(this.header);
    console.log(this.containerClass);
    console.log(this.containerStyle);
  }
}
