import { from, Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { NgHeaderAction } from './../../../../dist/corelib/lib/interfaces/ngHeaderAction.d';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CoreLib Test App';
  headerActions: NgHeaderAction[] = [];
  rowData?: Observable<any>;
  columnDefs: ColDef[] = [
    { field: '', checkboxSelection: true, width: 100},
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
  ];

  constructor(private _primeNgConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this._primeNgConfig.ripple = true;

    this.headerActions.push(
      {
        icon: 'pi pi-print',
        iconPosition: 'left',
        label: 'Print',
        ngClass: 'p-button-raised p-button-sm p-button-success',
        visible: true,
        command: () => { console.log('print'); }
      },
      {
        icon: 'pi pi-save',
        iconPosition: 'left',
        label: 'Export',
        ngClass: 'p-button-raised p-button-sm p-button-warning',
        visible: true,
        command: () => { console.log('export'); }
      },
      {
        icon: 'pi pi-refresh',
        iconPosition: 'left',
        label: 'Refresh',
        ngClass: 'p-button-raised p-button-sm p-button-info',
        visible: true,
        command: () => { console.log('refresh'); }
      }
    );

    // Grid
    this.loadGrid();
  }

  loadGrid(): void {
    from([[
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]]).subscribe({
      next: (data: any) => this.rowData = data
    })
  }
}
