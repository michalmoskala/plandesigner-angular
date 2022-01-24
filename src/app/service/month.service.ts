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

    removeMonth(id: number): Observable<Month[]>{
        return this.httpClient.delete<Month[]>(`${this.baseUrl}/delete_month/${id}/`)
    }

    getMonth(id: number) {
        return this.httpClient.get<Day[]>(`${this.baseUrl}/month/${id}/`)
    }
    
    getWorkerDetailString(id: number) {
        return this.httpClient.get<Worker_Details[]>(`${this.baseUrl}/month/${id}/workers/`)
    }

    setWorkerToShift(month_id, worker_name, day, which_time) {
        return this.httpClient.put<Worker_Details[]>(`${this.baseUrl}/set_worker/`, {'month_id': month_id, 'worker_name': worker_name, 'day': day, 'which_time': which_time})
    }

    swapSpecialDay(month_id, day_number) {
        return this.httpClient.put<Worker_Details[]>(`${this.baseUrl}/special_day/`, {'day': day_number, 'month_id': month_id})
    }
}

