import { Component } from '@angular/core';
import { ApiService } from 'corelib';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { CommentsViewModelService } from './comments-viewmodel.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsViewModelService, ApiService]
})
export class CommentsComponent extends AppBaseListComponent {
  constructor(public VM: CommentsViewModelService) {
    super();
  }

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
