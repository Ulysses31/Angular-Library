import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-calendar',
  template: `
    <p-calendar></p-calendar>
  `,
  styleUrls: ['./ng-calendar.component.css']
})
export class NgCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
