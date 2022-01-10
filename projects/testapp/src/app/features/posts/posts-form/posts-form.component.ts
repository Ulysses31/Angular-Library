import { PostsFormViewModelService } from './posts-form-viewmodel.service';
import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';

@Component({
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css'],
  providers: [PostsFormViewModelService, ApiService],
})
export class PostsFormComponent extends AppBaseComponent {
  constructor(public VM: PostsFormViewModelService) {
    super();
    console.log('[OnInit PostsFormComponent]');
  }

  override ngOnInit(): void {
    super.ngOnInit();
    console.log('object');
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  formStatus(frm: NgForm): void {
    const idx = this.VM.headerActions.findIndex((item) => item.id === 'save');
    this.VM.headerActions[idx].disabled = !frm.valid;
  }
}
