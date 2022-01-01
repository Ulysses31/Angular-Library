import { Component, OnInit, Input } from '@angular/core';
import { NgHeaderAction } from '../../interfaces/ngHeaderAction';

@Component({
  selector: 'ng-header-actions',
  template: `
    <p-toolbar class="right shadow">
      <ng-container *ngFor="let action of actions">
        <ng-button
          [id]="action.id"
          [label]="action.label"
          [icon]="action.icon"
          [iconPosition]="action.iconPosition"
          [ngClass]="action.ngClass"
          [visible]="action.visible"
          [loadingIcon]="action.loadinIcon"
          [loading]="action.loading"
          [disabled]="action.disabled"
          [command]="action.command"
        ></ng-button>
      </ng-container>
    </p-toolbar>
  `,
  styleUrls: ['./ng-header-actions.component.css'],
})
export class NgHeaderActionsComponent implements OnInit {
  @Input() actions: NgHeaderAction[] = [];

  constructor() {}

  ngOnInit(): void {}
}
