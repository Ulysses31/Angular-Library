import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-input-number',
  template: ` <p-inputNumber mode="decimal"></p-inputNumber> `,
  styleUrls: ['./ng-input-number.component.css'],
})
export class NgInputNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
