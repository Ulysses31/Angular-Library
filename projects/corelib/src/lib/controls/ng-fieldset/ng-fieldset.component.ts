import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-fieldset',
  template: `
    <p-fieldset legend="Header" [toggleable]="true"> Content </p-fieldset>
  `,
  styleUrls: ['./ng-fieldset.component.css'],
})
export class NgFieldsetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
