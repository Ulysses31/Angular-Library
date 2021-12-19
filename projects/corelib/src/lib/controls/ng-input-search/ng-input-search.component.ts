import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-search',
  template: `
    <span class="p-input-icon-left">
      <i class="pi pi-search"></i>
      <input
        type="text"
        pInputText
        class="p-inputtext p-component"
        placeholder="Search"
      />
    </span>
  `,
  styleUrls: ['./ng-input-search.component.css'],
})
export class NgInputSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
