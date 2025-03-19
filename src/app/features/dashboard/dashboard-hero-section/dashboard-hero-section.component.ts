import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-hero-section.component.html',
  styleUrls: ['./dashboard-hero-section.component.scss'],
})
export class DashboardHeroSectionComponent implements OnInit {
  slogans: string[] = [
    '给我越多的数据，你会收获一个越聪明的我'
  ];

  constructor() {}

  ngOnInit(): void {}
}
