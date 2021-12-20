import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-button',
  template: `
    <p-button label="Click"></p-button>
  `,
  styleUrls: ['./ng-button.component.css']
})
export class NgButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
