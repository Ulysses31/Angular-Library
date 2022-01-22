import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';
import { PhotosFormViewModelService } from './photos-form-viewmodel.service';

@Component({
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.css'],
  providers: [PhotosFormViewModelService, ApiService],
})
export class PhotosFormComponent extends AppBaseComponent {
  constructor(public VM: PhotosFormViewModelService) {
    super();
    console.log('[OnInit PhotosFormComponent]');
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
