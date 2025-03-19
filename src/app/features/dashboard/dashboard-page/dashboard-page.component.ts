import { Component } from '@angular/core';
import { DashboardHeroSectionComponent } from '../dashboard-hero-section/dashboard-hero-section.component';
import { UploadPageComponent } from '../../upload/upload-page/upload-page.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardHeroSectionComponent, UploadPageComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {}
