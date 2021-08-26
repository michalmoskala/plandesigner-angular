import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Month } from '../common/month';

@Injectable({
    providedIn: 'root'
  })
export class MonthService {
    private baseUrl = 'http://localhost:8000'

    constructor(private httpClient: HttpClient) { }

    getMonths(): Observable<Month[]> {
        return this.httpClient.get<Month[]>(`${this.baseUrl}/months/`)
    }
}