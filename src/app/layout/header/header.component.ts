import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // model: NgbDateStruct;
  // date: {year: number, month: number};

  // constructor(private calendar: NgbCalendar) {
  // }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }

  ngOnInit() {
  }

}
