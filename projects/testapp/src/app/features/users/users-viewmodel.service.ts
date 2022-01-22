import { Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';
import { UserDto } from '../../api/models/user-dto';
import { Router } from '@angular/router';

@Injectable()
export class UsersViewModelService extends AppBaseListViewModelService<UserDto> {
  constructor(
    private apiService: ApiService<UserDto>,
    private router: Router
  ) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Users';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<UserDto[]> {
    console.log(
      `Users viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<UserDto> {
    console.log(
      `Users viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: any): void {
    this.router.navigate(['users/edit', selectedRow.id], {
      queryParams: { backUrl: this.router.url },
    });
  }
}
