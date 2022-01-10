import { Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';
import { CommentDto } from '../../api/models/comment-dto';
import { Router } from '@angular/router';

@Injectable()
export class CommentsViewModelService extends AppBaseListViewModelService<CommentDto> {
  constructor(
    private apiService: ApiService<CommentDto>,
    private router: Router
  ) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Comments';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<CommentDto[]> {
    console.log(
      `Comments viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<CommentDto> {
    console.log(
      `Comments viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: any): void {
    this.router.navigate(
      ['comments/edit', selectedRow.id],
      { queryParams: { backUrl: this.router.url } }
    );
  }
}
