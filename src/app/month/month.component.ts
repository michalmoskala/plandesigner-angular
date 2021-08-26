import { Component, OnInit } from '@angular/core';
import { Month } from 'src/app/common/month';
import { MonthService } from 'src/app/service/month.service';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  months: Month[]

  constructor(private monthService: MonthService) { }

  ngOnInit(): void {
    this.getMonths()
  }

  getMonths() {
    this.monthService.getMonths().subscribe(
      data => {
        this.months = data
      }
    )
  }

}
