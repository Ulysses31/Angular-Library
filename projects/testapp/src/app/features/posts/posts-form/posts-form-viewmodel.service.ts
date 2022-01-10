import { PostDto } from './../../../api/models/post-dto';
import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class PostsFormViewModelService extends AppBaseViewModelService<PostDto> {

  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<PostDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Post Form';
  }

  override ngAfterViewInit(): void {
      super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<PostDto> {
    console.log(
       `Posts Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: PostDto): Observable<PostDto> {
    console.log('postCb from PostsFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: PostDto): Observable<PostDto> {
    console.log('putCb from PostsFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from PostsFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: PostDto): Observable<PostDto> {
    item = {
      id: '0',
      userId: 0,
      title: '',
      body: ''
    }
    return of(item);
  }
}
