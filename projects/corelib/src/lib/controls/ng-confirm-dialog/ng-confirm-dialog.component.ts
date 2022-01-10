import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'ng-confirm-dialog',
  template: `
    <p-confirmDialog
      header="Confirmation"
      icon="pi pi-exclamation-triangle"
    ></p-confirmDialog>
  `,
  styleUrls: ['./ng-confirm-dialog.component.css'],
})
export class NgConfirmDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
