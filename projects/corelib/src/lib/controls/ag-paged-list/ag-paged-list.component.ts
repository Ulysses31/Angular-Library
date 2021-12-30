import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'ag-paged-list',
  template: `
    <ag-grid-angular
      #myGgid
      style="width: 100%; height: 500px;"
      class="ag-theme-alpine"
      [rowData]="$any(data$)"
      [columnDefs]="columnDefs"
      [rowSelection]="rowSelection"
      [pagination]="$any(pagination)"
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

  constructor() {}

  ngOnInit(): void {}
}
