import { Component, OnInit, Input } from '@angular/core';
import { DialogMessageEntity } from '../../models/dialog-message-entity';

@Component({
  selector: 'ng-dialog',
  template: `
    <p-dialog
      [(visible)]="dialogMessageContent.display"
      [modal]="true"
      [draggable]="false"
      [breakpoints]="{ '960px': '75vw', '640px': '100vw' }"
      [style]="{ width: '50vw' }"
    >
      <ng-template pTemplate="header">
        <strong>{{ dialogMessageContent.title! }}</strong>
      </ng-template>
      <p style="color: #979797">
        {{ dialogMessageContent.content }}
      </p>
      <ng-template pTemplate="footer">
        <p-button
          icon="pi pi-check"
          (click)="dialogMessageContent.display = false"
          label="Ok"
          class="p-button-text"
        ></p-button>
        <!-- <p-button icon="pi pi-times" (click)="displayModal=false" label="No"></p-button> -->
      </ng-template>
    </p-dialog>
  `,
  styleUrls: ['./ng-dialog.component.css'],
})
export class NgDialogComponent implements OnInit {
  @Input() dialogMessageContent: DialogMessageEntity = {
    display: false,
    title: '',
    content: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
