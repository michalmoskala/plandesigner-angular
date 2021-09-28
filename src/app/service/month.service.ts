import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Month } from '../common/month';
import { Day } from '../common/day'
import { Worker_Details } from '../common/worker_details';


@Injectable({
    providedIn: 'root'
  })
export class MonthService {
    private baseUrl = 'http://localhost:8000'

    constructor(private httpClient: HttpClient) { }

    getMonths(): Observable<Month[]> {
        return this.httpClient.get<Month[]>(`${this.baseUrl}/months/`)
    }

    removeMonth(id: number)  {
        console.log(id)
        return this.httpClient.delete(`${this.baseUrl}/delete_month/${id}/`).subscribe(() => console.log("month deleted"))
    }

    getMonth(id: number) {
        return this.httpClient.get<Day[]>(`${this.baseUrl}/month/${id}/`)
    }
    
    getWorkerDetailString(id: number) {
        return this.httpClient.get<Worker_Details[]>(`${this.baseUrl}/month/${id}/workers/`)
    }
}

