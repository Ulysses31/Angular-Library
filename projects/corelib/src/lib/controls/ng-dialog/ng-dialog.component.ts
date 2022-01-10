import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
          (click)="commandBtn()"
          label="Ok"
          class="p-button-text"
        ></p-button>
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
    hasBtnUrl: false
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  commandBtn(): void {
    this.dialogMessageContent.display = false;
    this.route.queryParams.subscribe({
      next: (data) => this.dialogMessageContent.btnUrl = data['backUrl']
    });
    if(this.dialogMessageContent.hasBtnUrl) {
      this.router.navigate([this.dialogMessageContent.btnUrl]);
    };
  }
}
