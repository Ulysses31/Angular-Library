import { NgHeaderAction } from './../../interfaces/ngHeaderAction';
import { AfterViewInit, Directive, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, switchMap, tap } from 'rxjs';
import { NgBaseEntity } from '../../models/base-entity';
import { NgBaseSearchModel } from '../../models/base-search-model';
import { Message } from 'primeng/api';
import { ColDef } from 'ag-grid-community';

@Directive()
export abstract class NgPagedListViewModelService<TModel extends NgBaseEntity>
  implements OnInit, AfterViewInit, OnDestroy
{
  model?: TModel[] = [];
  selectedModel?: TModel | undefined;
  modelStruct?: string[] = [];
  message: Message | undefined;
  label: string | undefined;
  headerActions: NgHeaderAction[] = [];
  columnDefs: ColDef[] = [];
  rowData: Observable<any> | undefined;
  isBusy: boolean = false;
  toggleModelPre: boolean = false;

  abstract search(searchModel: NgBaseSearchModel): Observable<TModel[]>;
  abstract getById(id: string): Observable<TModel>;

  constructor() {}

  ngOnInit(): void {
    this.headerActions.push(
      {
        icon: 'pi pi-refresh',
        iconPosition: 'left',
        label: 'Refresh',
        ngClass: 'p-button-raised p-button-sm p-button-info',
        visible: true,
        command: () => this.gridInit(),
      },
      {
        icon: 'pi pi-id-card',
        iconPosition: 'left',
        label: 'Model',
        ngClass: 'p-button-raised p-button-sm p-button-danger',
        visible: true,
        command: () => this.toggleModelPre = !this.toggleModelPre
      }
    );

    // Init Api Call
    this.gridInit();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  private gridInit(): void {
    this.isBusy = true;
    this.search({})
      .subscribe({
        next: (data: TModel[]) => {
          this.model = data;
          this.generateGrid(data);
        },
        error: (err) => {
          this.isBusy = false;
          this.userMessage('error', err.name, err.message);
          throw err;
        },
        complete: () => (this.isBusy = false),
      });
  }

  private generateGrid(data: TModel[]): void {
    from([data])
      .pipe(
        tap(() => {
          this.columnDefs = [{ field: '', checkboxSelection: true, width: 50 }];
          Object.getOwnPropertyNames(data[0]).map((header: string) =>
            this.columnDefs.push({
              field: header,
              sortable: true,
              filter: true,
              resizable: true,
            })
          );
        })
      )
      .subscribe({
        next: (data: any) => {
          this.modelStruct = data && Object.getOwnPropertyNames(data[0]);
          this.rowData = data as Observable<TModel[]>;
        },
      });
  }

  private userMessage(severity: string, summary: string, detail: string): void {
    this.message = {
      severity,
      summary,
      detail,
    };
  }
}
