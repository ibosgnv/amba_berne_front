import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentType, PasseportRequestDTO } from '../dtos/passeport-request.dto';

@Injectable({ providedIn: 'root' })
export class DemandePasseportService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/v1/demande-passeport';

  submit(dto: PasseportRequestDTO, files: Partial<Record<DocumentType, File>>): Observable<string> {
    const formData = new FormData();

    // DTO sent as JSON blob under the part name "passeport"
    formData.append('passeport', new Blob([JSON.stringify(dto)], { type: 'application/json' }));

    // Each file appended under its DocumentType key
    for (const [type, file] of Object.entries(files) as [DocumentType, File][]) {
      if (file) {
        formData.append(type, file);
      }
    }

    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
