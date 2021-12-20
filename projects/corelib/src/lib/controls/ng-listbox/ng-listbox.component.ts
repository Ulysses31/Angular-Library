import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-listbox',
  template: ` <p-listbox [multiple]="true" [options]="cities" optionLabel="name" optionValue="code"></p-listbox> `,
  styleUrls: ['./ng-listbox.component.css'],
})
export class NgListboxComponent implements OnInit {
  cities: { name: string; code: string }[] = [];

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {}
}
