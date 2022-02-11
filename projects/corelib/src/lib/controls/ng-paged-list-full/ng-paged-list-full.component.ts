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
  ViewChild,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';
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
        <div
          class="preTemplate"
          [ngStyle]="{ 'display': VM.toggleModelPre ? 'block' : 'none' }">
          <pre>{{VM.model | json}}</pre>
        </div>
        <ng-messages *ngIf="VM.message" [message]="VM.message"></ng-messages>
        <ng-search-filters
          [showFilters]="showFilters"
          [filterData]="VM.filterData"
          [searchCmd]="VM.onSearchCmd"
          [clearCmd]="VM.onClearCmd"
        ></ng-search-filters>
        <div class="gridTemplate">
          <p-toolbar class="shadow">
            <ag-paged-list
              #agGrid
              [columnDefs]="VM.columnDefs"
              [data$]="VM.rowData"
            ></ag-paged-list>
          </p-toolbar>
        </div>
      </div>
      <ng-full-spinner [isBusy]="VM.isBusy"></ng-full-spinner>
      <ng-dialog [dialogMessageContent]="VM.dialogMessageContent"></ng-dialog>
    </ng-container>
  `,
  styleUrls: ['./ng-paged-list-full.component.css'],
})
export class NgPagedListFullComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() VM?: NgPagedListViewModelService<NgBaseEntity>;
  @Input() showFilters: boolean = false;
  @ViewChild('agGrid') grid!: AgGridAngular;
  gridApi!: GridApi;

  constructor() {
    console.log('[OnInit NgPagedListFullComponent]');
  }

  ngOnInit(): void {
    this.VM?.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.VM?.ngAfterViewInit();
    this.gridApi = this.grid.gridOptions.api!;
  }

  ngOnDestroy(): void {
    this.VM?.ngOnDestroy();
  }
}
