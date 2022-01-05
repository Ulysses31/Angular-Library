import { Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';
import { TodoDto } from '../../api/models/todo-dto';

@Injectable()
export class TodosViewModelService extends AppBaseListViewModelService<TodoDto> {
  constructor(private apiService: ApiService<TodoDto>) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Todos';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<TodoDto[]> {
    console.log(
      `Todos viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<TodoDto> {
    console.log(
      `Todos viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: any): void {
    console.log(selectedRow);
  }
}
