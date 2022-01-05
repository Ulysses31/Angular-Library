import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'ag-paged-list',
  template: `
    <ag-grid-angular
      #myGgid
      class="ag-theme-alpine myGrid"
      [rowData]="$any(data$)"
      [columnDefs]="columnDefs"
      [rowSelection]="rowSelection"
      [pagination]="$any(pagination)"
      [gridOptions]="gridOptions"
    >
    </ag-grid-angular>
  `,
  styleUrls: ['./ag-paged-list.component.css'],
})
export class AgPagedListComponent implements OnInit {
  @Input() rowSelection: string = 'multiple';
  @Input() columnDefs?: ColDef[];
  @Input() data$?: Observable<any>;
  @Input() pagination?: boolean = true;
  gridOptions: GridOptions = {
    skipHeaderOnAutoSize: false,
    onModelUpdated: (event) => {
      event.api.sizeColumnsToFit();
      event.columnApi.autoSizeAllColumns();
    },
    onGridReady: (event) => {
      event.api.sizeColumnsToFit();
      event.columnApi.autoSizeAllColumns();
    },
    onGridSizeChanged: (event) => {
      event.api.sizeColumnsToFit()
      event.columnApi.autoSizeAllColumns();
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
