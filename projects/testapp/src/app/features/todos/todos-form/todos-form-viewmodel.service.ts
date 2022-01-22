import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { TodoDto } from '../../../api/models/todo-dto';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class TodosFormViewModelService extends AppBaseViewModelService<TodoDto> {
  checked: boolean = false;
  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<TodoDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Todos Form';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<TodoDto> {
    console.log(
      `Todos Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: TodoDto): Observable<TodoDto> {
    console.log('postCb from TodosFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: TodoDto): Observable<TodoDto> {
    console.log('putCb from TodosFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from TodosFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: TodoDto): Observable<TodoDto> {
    item = {
      id: '0',
      userId: 0,
      title: '',
      completed: false
    };
    return of(item);
  }
}
