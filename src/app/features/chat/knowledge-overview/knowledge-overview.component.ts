import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from '../../../shared/components/simple-card/simple-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-knowledge-overview',
  standalone: true,
  imports: [CommonModule,SimpleCardComponent,MatCardModule,MatIconModule],
  templateUrl: './knowledge-overview.component.html',
  styleUrls: ['./knowledge-overview.component.scss']
})
export class KnowledgeOverviewComponent implements OnInit {
  overviewItems = [
    { label: 'Knowledge Bases', icon: 'park' ,value:0},
    { label: 'Sources', icon: 'description' ,value:0},
    { label: 'Seeds', icon: 'spa' ,value:0},
    { label: 'Tokens', icon: 'widgets',value:0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
