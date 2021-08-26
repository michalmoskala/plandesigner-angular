import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../common/worker';

@Injectable({
    providedIn: 'root'
  })
export class WorkerService {
    private baseUrl = 'http://localhost:8000'

    constructor(private httpClient: HttpClient) { }

    getWorkers(): Observable<Worker[]> {
        return this.httpClient.get<Worker[]>(`${this.baseUrl}/workers/`)
    }
  }