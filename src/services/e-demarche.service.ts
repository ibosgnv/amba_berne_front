import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EDemarcheRequestDTO } from '../dtos/e-demarche-request.dto';
import { environment } from '../utils/environment';

@Injectable({ providedIn: 'root' })
export class EDemarcheService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl + 'e-demarche';

  submit(dto: EDemarcheRequestDTO, files: File[]): Observable<string> {
    const formData = new FormData();

    formData.append('request', new Blob([JSON.stringify(dto)], { type: 'application/json' }));

    // Files appended as file_0, file_1, ... matching dto.documentLabels order
    files.forEach((file, index) => formData.append(`file_${index}`, file));

    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
