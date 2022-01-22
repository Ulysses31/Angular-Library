import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';
import { UsersFormViewModelService } from './users-form-viewmodel.service';

@Component({
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  providers: [UsersFormViewModelService, ApiService],
})
export class UsersFormComponent extends AppBaseComponent {
  constructor(public VM: UsersFormViewModelService) {
    super();
    console.log('[OnInit UsersFormComponent]');
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
