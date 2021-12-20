import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-text-area',
  template: ` <textarea pInputTextarea></textarea> `,
  styleUrls: ['./ng-input-text-area.component.css'],
})
export class NgInputTextAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
