import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledge-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge-overview.component.html',
  styleUrls: ['./knowledge-overview.component.scss']
})
export class KnowledgeOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
