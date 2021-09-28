import { Component, OnInit } from '@angular/core';
import { Month } from 'src/app/common/month';
import { MonthService } from 'src/app/service/month.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  removeMonth(id) {
    this.monthService.removeMonth(id)
  }

}
