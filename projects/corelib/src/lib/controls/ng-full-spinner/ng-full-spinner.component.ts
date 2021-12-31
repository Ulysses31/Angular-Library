import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-full-spinner',
  template: `
    <div
      class="spinner-container"
      [ngStyle]="{ display: isBusy ? 'flex' : 'none' }"
      [ngClass]="{ 'm-fadeIn': isBusy, 'm-fadeOut': !isBusy }"
    >
      <ng-progress-spinner></ng-progress-spinner>
      <p id="loading">Loading...</p>
    </div>
  `,
  styleUrls: ['./ng-full-spinner.component.css'],
})
export class NgFullSpinnerComponent implements OnInit {
  @Input() isBusy: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
