import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-divider',
  template: `
    <p-divider layout="vertical" type="dashed" align="left"
      ><span class="p-tag">Badge</span></p-divider
    >
  `,
  styleUrls: ['./ng-divider.component.css'],
})
export class NgDividerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
