import { Component } from '@angular/core';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [FileUploadModule,CommonModule], // Add Ng2FileUploadModule here
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.scss',
})
export class UploadPageComponent {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;

  constructor() {
    this.uploader = new FileUploader({
      url: 'https://your-api-endpoint.com/upload',
      authToken: localStorage.getItem('access_token') || '',
      isHTML5: true
    });
  }


}
