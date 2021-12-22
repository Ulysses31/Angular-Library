import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-accordion',
  template: `
    <p-accordion [multiple]="false">
      <p-accordionTab header="Header 1"> Content 1 </p-accordionTab>
      <p-accordionTab header="Header 2"> Content 2 </p-accordionTab>
      <p-accordionTab header="Header 3"> Content 3 </p-accordionTab>
    </p-accordion>
  `,
  styleUrls: ['./ng-accordion.component.css'],
})
export class NgAccordionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
