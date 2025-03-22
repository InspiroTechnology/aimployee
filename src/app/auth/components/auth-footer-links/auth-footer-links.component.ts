import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-footer-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-footer-links.component.html',
  styleUrls: ['./auth-footer-links.component.scss']
})
export class AuthFooterLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
