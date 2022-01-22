import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { UserDto } from '../../../api/models/user-dto';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class UsersFormViewModelService extends AppBaseViewModelService<UserDto> {
  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<UserDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/Users'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Users Form';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<UserDto> {
    console.log(
      `Users Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: UserDto): Observable<UserDto> {
    console.log('postCb from UsersFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: UserDto): Observable<UserDto> {
    console.log('putCb from UsersFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from UsersFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: UserDto): Observable<UserDto> {
    item = {
      id: '0',
      name: '',
      username: '',
      email: '',
      address: undefined,
      phone: '',
      website: '',
      company: undefined
    };
    return of(item);
  }
}
