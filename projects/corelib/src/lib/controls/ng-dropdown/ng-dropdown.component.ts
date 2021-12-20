import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-dropdown',
  template: `
   <p-dropdown [options]="cities" optionLabel="name" placeholder="Select a Country"></p-dropdown>

  `,
  styleUrls: ['./ng-dropdown.component.css']
})
export class NgDropdownComponent implements OnInit {
  cities: { name: string, code: string }[] = [];

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit(): void {
  }

}
