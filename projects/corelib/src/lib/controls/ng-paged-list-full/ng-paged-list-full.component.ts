import { NgHeaderAction } from './../../interfaces/ngHeaderAction';
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
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api/public_api';

@Component({
  selector: 'ng-paged-list-full',
  template: `
    <div class="pagedListFullContainer">
      <div class="fmain">
        <div class="header">
          <h1>{{ label }}</h1>
        </div>
        <div class="headerActions">
          <ng-header-actions
            [actions]="$any(headerActions)"
          ></ng-header-actions>
        </div>
      </div>
      <ng-messages *ngIf="message" [message]="message"></ng-messages>
      <div class="gridTemplate">
        <p-toolbar class="shadow">
          <ag-paged-list
            [columnDefs]="columnDefs"
            [data$]="rowData"
          ></ag-paged-list>
        </p-toolbar>
      </div>
    </div>
    <ng-full-spinner [isBusy]="isBusy"></ng-full-spinner>
  `,
  styleUrls: ['./ng-paged-list-full.component.css'],
})
export class NgPagedListFullComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() VM?: NgPagedListViewModelService<NgBaseEntity>;
  @Input() headerActions?: NgHeaderAction[];
  @Input() columnDefs?: ColDef[];
  @Input() rowData?: Observable<any>;
  @Input() isBusy: boolean = false;
  @Input() label?: string = 'Paged List Full';
  @Input() message?: Message;

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
