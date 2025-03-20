import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-knowledge-garden',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-knowledge-garden.component.html',
  styleUrls: ['./dashboard-knowledge-garden.component.scss']
})
export class DashboardKnowledgeGardenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
