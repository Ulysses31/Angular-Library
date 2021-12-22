import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-dialog',
  template: `
    <p-dialog header="Title" [(visible)]="display"> Content </p-dialog>
  `,
  styleUrls: ['./ng-dialog.component.css'],
})
export class NgDialogComponent implements OnInit {
  display: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
