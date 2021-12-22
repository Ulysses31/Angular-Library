import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-tabview',
  template: `
    <p-tabView>
      <p-tabPanel header="Header 1"> Content 1 </p-tabPanel>
      <p-tabPanel header="Header 2"> Content 2 </p-tabPanel>
      <p-tabPanel header="Header 3"> Content 3 </p-tabPanel>
    </p-tabView>
  `,
  styleUrls: ['./ng-tabview.component.css'],
})
export class NgTabviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
