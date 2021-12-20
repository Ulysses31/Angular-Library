import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-mask',
  template: ` <p-inputMask mask="(999) 999-9999" placeholder="(999) 999-9999"></p-inputMask> `,
  styleUrls: ['./ng-input-mask.component.css'],
})
export class NgInputMaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
