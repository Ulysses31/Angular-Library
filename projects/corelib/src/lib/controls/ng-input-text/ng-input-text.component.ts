import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-text',
  template: `
    <span class="p-input-icon-right">
      <i class="pi pi-spin pi-spinner"></i>
      <input type="text" pInputText class="p-inputtext p-component" />
    </span>
  `,
  styleUrls: ['./ng-input-text.component.css'],
})
export class NgInputTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
