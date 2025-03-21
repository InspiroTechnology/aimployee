import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from '../../../shared/components/simple-card/simple-card.component';

@Component({
  selector: 'app-knowledge-overview',
  standalone: true,
  imports: [CommonModule,SimpleCardComponent],
  templateUrl: './knowledge-overview.component.html',
  styleUrls: ['./knowledge-overview.component.scss']
})
export class KnowledgeOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
