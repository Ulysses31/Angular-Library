import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'lib-ng-confirm-dialog',
  template: `
    <p-confirmDialog
      header="Confirmation"
      icon="pi pi-exclamation-triangle"
    ></p-confirmDialog>
  `,
  styleUrls: ['./ng-confirm-dialog.component.css'],
})
export class NgConfirmDialogComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
}
