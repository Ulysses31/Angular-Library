import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { CommentDto } from '../../../api/models/comment-dto';

@Injectable()
export class CommentsFormViewModelService extends AppBaseViewModelService<CommentDto> {
  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<CommentDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Comments Form';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<CommentDto> {
    console.log(
      `Comments Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: CommentDto): Observable<CommentDto> {
    console.log('postCb from CommentsFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: CommentDto): Observable<CommentDto> {
    console.log('putCb from CommentsFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from CommentsFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: CommentDto): Observable<CommentDto> {
    item = {
      id: '0',
      postId: 0,
      name: '',
      email: '',
      body: '',
    };
    return of(item);
  }
}
