import {
  NgPagedListViewModelService,
  NgBaseEntity,
} from 'projects/corelib/src/public-api';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
@Component({
  selector: 'ng-paged-list-full',
  template: `
    <ng-container *ngIf="VM">
      <div class="pagedListFullContainer">
        <div class="fmain">
          <div class="header">
            <h1>{{ VM.label }}</h1>
          </div>
          <div class="headerActions">
            <ng-header-actions
              [actions]="$any(VM.headerActions)"
            ></ng-header-actions>
          </div>
        </div>
        <ng-messages *ngIf="VM.message" [message]="VM.message"></ng-messages>
        <div class="gridTemplate">
          <p-toolbar class="shadow">
            <ag-paged-list
              [columnDefs]="VM.columnDefs"
              [data$]="VM.rowData"
            ></ag-paged-list>
          </p-toolbar>
        </div>
      </div>
      <ng-full-spinner [isBusy]="VM.isBusy"></ng-full-spinner>
    </ng-container>
  `,
  styleUrls: ['./ng-paged-list-full.component.css'],
})
export class NgPagedListFullComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() VM?: NgPagedListViewModelService<NgBaseEntity>;

  constructor() {}

  ngOnInit(): void {
    this.VM?.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.VM?.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    this.VM?.ngOnDestroy();
  }
}
