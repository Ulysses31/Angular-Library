import { ApiService, NgBaseSearchModel } from 'corelib';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostDto } from '../../api/models/post-dto';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { Router } from '@angular/router';

@Injectable()
export class PostsViewModelService extends AppBaseListViewModelService<PostDto> {

  constructor(
    private apiService: ApiService<PostDto>,
    private router: Router
  ) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/posts'
    );
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
    console.log(
      `Posts viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<PostDto> {
    console.log(
      `Posts viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: PostDto): void {
    console.log(selectedRow);
    this.router.navigate(
      ['posts/edit', selectedRow.id],
      { queryParams: { backUrl: this.router.url } }
    );
  }
}
