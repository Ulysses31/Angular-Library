import { NgHeaderAction } from './../../interfaces/ngHeaderAction';
import { AfterViewInit, Directive, OnDestroy, OnInit } from '@angular/core';
import { from, map, Observable, switchMap, tap } from 'rxjs';
import { NgBaseEntity } from '../../models/base-entity';
import { NgBaseSearchModel } from '../../models/base-search-model';
import { Message } from 'primeng/api';
import { ColDef } from 'ag-grid-community';
import { DialogMessageEntity } from '../../models/dialog-message-entity';

@Directive()
export abstract class NgPagedListViewModelService<TModel extends NgBaseEntity>
  implements OnInit, AfterViewInit, OnDestroy
{
  model?: TModel[] = [];
  selectedModel?: TModel | undefined;
  searchModel: NgBaseSearchModel | undefined;
  modelStruct?: string[] = [];
  message: Message | undefined;
  label: string | undefined;
  headerActions: NgHeaderAction[] = [];
  columnDefs: ColDef[] = [];
  filterData: {
    type: string,
    title: string,
    value: '',
    op: ''
  }[] = [];
  rowData?: Observable<any>;
  isBusy: boolean = false;
  toggleModelPre: boolean = false;
  dialogMessageContent: DialogMessageEntity = {
    display: false,
    title: 'Message',
    content: '',
    hasBtnUrl: false
  };

  abstract search(searchModel: NgBaseSearchModel): Observable<TModel[]>;
  abstract getById(id: string): Observable<TModel>;

  constructor() {}

  ngOnInit(): void {
    this.headerActions.push(
      {
        id: 'refresh',
        icon: 'pi pi-refresh',
        iconPosition: 'left',
        label: 'Refresh',
        ngClass: 'p-button-raised p-button-sm p-button-info',
        visible: true,
        command: () => this.gridInit(),
      },
      {
        id: 'model',
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

    this.searchModel = {
      'page': 1,
      'pageSize': 50,
      'applyRowCount': true,
      'filters': '',
      'sorts': ''
    };

    this.search(this.searchModel)
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
          this.getFilterTypes(data);
        },
      });
  }

  private getFilterTypes(data: any) {
    this.filterData = [];
    for (const key in data[0]) {
      if (Object.prototype.hasOwnProperty.call(data[0], key)) {
        const element = data[0][key];
        this.filterData.push({
          'type': typeof element,
          'title': key,
          'value': '',
          'op': ''
        });
      }
    }
  }

  private userMessage(severity: string, summary: string, detail: string): void {
    this.message = {
      severity,
      summary,
      detail,
    };
  }

  onSearchCmd = () => {
    console.log('Search Clicked');
    console.log(this.filterData);
  }

  onClearCmd = () => {
    from(this.filterData).pipe(
      map((data) => {
        data.value = '',
        data.op = ''
      })
    ).subscribe();
  }

}
