import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-dropdown',
  template: `
    <p-dropdown
      [options]="dataList"
      optionLabel="name"
      [placeholder]="dropTitle"
    >
    </p-dropdown>
  `,
  styleUrls: ['./ng-dropdown.component.css'],
})
export class NgDropdownComponent implements OnInit {
  @Input() dataList: { name: string; code: string }[] = [];
  @Input() dropTitle: string = '';

  constructor() { }

  ngOnInit(): void {}
}
