import { Injectable } from "@angular/core";
import { DemandeVisaDTO } from "../dtos/demande-visa.dto";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../utils/environment";

@Injectable({
  providedIn: "root",
})
export class DemandeVisaService {
  constructor(private http: HttpClient) {}

  submitInfos(payload: DemandeVisaDTO): Observable<{ reference: string }> {
    return this.http.post<{ reference: string }>(
      environment.apiUrl + "demande-visa",
      payload,
    );
  }
}
