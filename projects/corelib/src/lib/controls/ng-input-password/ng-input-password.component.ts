import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-password',
  template: ` <p-password [toggleMask]="true"></p-password> `,
  styleUrls: ['./ng-input-password.component.css'],
})
export class NgInputPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
