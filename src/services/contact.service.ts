import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequestDTO } from '../dtos/contact-request.dto';
import { environment } from '../utils/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl + 'contact';

  submit(payload: ContactRequestDTO): Observable<void> {
    return this.http.post<void>(this.apiUrl, payload);
  }
}
