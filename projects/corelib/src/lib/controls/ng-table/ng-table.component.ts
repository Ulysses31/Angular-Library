import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-table',
  template: `
    <p-table [value]="content" [columns]="cols">
      <ng-template pTemplate="header">
        <tr>
          <th *ngFor="let col of cols">
            {{ col.header }}
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-content>
        <tr>
          <td *ngFor="let col of cols">
            {{ content[col.field] }}
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrls: ['./ng-table.component.css'],
})
export class NgTableComponent implements OnInit {
  cols: { field: string; header: string }[] = [];
  content: { vin: string; year: string; brand: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.content = [
      { vin: '0001', year: '2021', brand: 'Mustang' }
    ];
  }
}
