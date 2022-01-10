import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';
import { CommentsFormViewModelService } from './comments-form-viewmodel.service';

@Component({
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
  providers: [CommentsFormViewModelService, ApiService],
})
export class CommentsFormComponent extends AppBaseComponent {
  constructor(public VM: CommentsFormViewModelService) {
    super();
    console.log('[OnInit CommentsFormComponent]');
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
