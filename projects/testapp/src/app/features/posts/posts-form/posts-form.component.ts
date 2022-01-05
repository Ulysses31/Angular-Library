import { PostsFormViewModelService } from './posts-form-viewmodel.service';
import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';

@Component({
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css'],
  providers: [PostsFormViewModelService, ApiService]
})
export class PostsFormComponent extends AppBaseComponent {

  constructor(public VM: PostsFormViewModelService) {
    super();
    console.log('[OnInit PostsFormComponent]');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
