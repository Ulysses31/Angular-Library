import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-sidebar',
  template: `
    <p-sidebar [(visible)]="display" position="left" [fullScreen]="false"> Content </p-sidebar>
  `,
  styleUrls: ['./ng-sidebar.component.css'],
})
export class NgSidebarComponent implements OnInit {
  display: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
