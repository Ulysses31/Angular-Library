import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable } from 'rxjs/internal/Observable';
import { PostDto } from '../../../api/models/post-dto';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class PostsFormViewModelService extends AppBaseViewModelService<PostDto> {
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
}
