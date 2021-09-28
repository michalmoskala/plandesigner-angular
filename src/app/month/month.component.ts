import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/common/worker';
import { Worker_Details } from 'src/app/common/worker_details'
import { Day } from 'src/app/common/day';
import { MonthService } from 'src/app/service/month.service';
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

imports: [CommonModule, BrowserModule]

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  days: Day[]
  workers: Worker_Details[]

  constructor(
    private route: ActivatedRoute,
    private monthService: MonthService
    ) {}

  ngOnInit(): void {
    const monthId=(this.route.snapshot.paramMap.get("id"))
    this.getMonth(monthId)
    this.getWorkerDetails(monthId)
  }

  getMonth(monthId) {
    this.monthService.getMonth(monthId).subscribe(
      data => {
        this.days = data

      }
    )
  }

  getWorkerDetails(monthId) {
    this.monthService.getWorkerDetailString(monthId).subscribe(
      data => {
        this.workers = data

      }
    )
  }

}
