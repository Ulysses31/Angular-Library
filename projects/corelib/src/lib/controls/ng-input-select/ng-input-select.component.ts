import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-input-select',
  template: `
    <p-selectButton
      [options]="cities"
      [(ngModel)]="selectedCity"
      optionLabel="name"
    ></p-selectButton>
  `,
  styleUrls: ['./ng-input-select.component.css'],
})
export class NgInputSelectComponent implements OnInit {
  cities: { name: string; code: string }[] = [];
  selectedCity: string = '';

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {}
}
