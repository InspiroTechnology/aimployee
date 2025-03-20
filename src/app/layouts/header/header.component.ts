import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LayOutService } from '../../service/lay-out.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public layoutService: LayOutService) {}
  // toggleTheme(
  //   document.body.classList.toggle('dark-theme');

  // )
  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  // No additional logic needed for a static Angular Material nav bar
}
