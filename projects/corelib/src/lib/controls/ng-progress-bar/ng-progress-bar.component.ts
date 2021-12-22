import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-progress-bar',
  template: ` <p-progressBar mode="indeterminate" [value]="60"></p-progressBar> `,
  styleUrls: ['./ng-progress-bar.component.css'],
})
export class NgProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
