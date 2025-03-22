import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-form-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-wrapper.component.html',
  styleUrls: ['./auth-form-wrapper.component.scss']
})
export class AuthFormWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
