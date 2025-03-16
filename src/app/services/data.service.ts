import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = environment.azureFunctionBaseUrl;
  private functionCode = environment.azureFunctionCode; // added function key from environment

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    // Append the function key as a query parameter
    return this.http.get<any[]>(`${this.apiUrl}/items?code=${this.functionCode}`);
  }

  getItemDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}?code=${this.functionCode}`);
  }
}
