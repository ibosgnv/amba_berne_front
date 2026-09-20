import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequestDTO } from '../dtos/contact-request.dto';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  // Service mailer dédié, proxifié par nginx. Volontairement hors de
  // environment.apiUrl : le formulaire ne dépend plus du backend applicatif.
  private readonly apiUrl = '/api/contact';

  submit(payload: ContactRequestDTO): Observable<void> {
    return this.http.post<void>(this.apiUrl, payload);
  }
}
