import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private api: ApiService) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.post('files/upload', formData);
  }

  getUploadStatus(fileId: string): Observable<any> {
    return this.api.get(`files/status/${fileId}`);
  }
}
