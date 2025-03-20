import { Component } from '@angular/core';
import { LayOutService } from '../../service/lay-out.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Fixed typo here
})
export class SidebarComponent {
  constructor(public layoutService: LayOutService) {}
}
