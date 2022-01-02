import { from, Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { PostDto } from '../../api/models/postDto';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';

@Injectable()
export class PostsViewModelService extends AppBaseListViewModelService<PostDto> {
  constructor(
    private apiService: ApiService<PostDto>
  ) {
    super();
    this.apiService.setApiServiceUrl('https://jsonplaceholder.typicode.com/postss');
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Posts';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<PostDto[]> {
    console.log(`Posts viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`);
    return this.apiService.getAll();
  }

  getById(id: string): Observable<PostDto> {
    console.log(`Posts viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`);
    return of({});
  }
}
