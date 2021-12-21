import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-radio',
  template: `
    <p-radioButton
      name="groupname"
      value="0"
      [(ngModel)]="firstName"
      label="Radio Button"
    ></p-radioButton>
  `,
  styleUrls: ['./ng-input-radio.component.css'],
})
export class NgInputRadioComponent implements OnInit {
  firstName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
