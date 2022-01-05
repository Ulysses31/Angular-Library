import { Injectable } from '@angular/core';
import { PostDto } from '../../../api/models/post-dto';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class PostsFormViewModelService extends AppBaseViewModelService<PostDto> {
  constructor() {
    super();
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
}
