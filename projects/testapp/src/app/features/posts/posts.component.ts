import { PostsViewModelService } from './posts-viewmodel.service';
import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { ApiService } from 'corelib';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsViewModelService, ApiService],
})
export class PostsComponent extends AppBaseListComponent {
  constructor(public VM: PostsViewModelService) {
    super();
  }

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
