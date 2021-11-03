import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopFiveProductsService {
  private apiUrl = 'https://ecomm-products.modus.workers.dev/';

  constructor(private http: HttpClient) {
   }

  getTopFiveProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
