import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';
import { AlbumsFormViewModelService } from './albums-form-viewmodel.service';

@Component({
  templateUrl: './albums-form.component.html',
  styleUrls: ['./albums-form.component.css'],
  providers: [AlbumsFormViewModelService, ApiService],
})
export class AlbumsFormComponent extends AppBaseComponent {
  constructor(public VM: AlbumsFormViewModelService) {
    super();
    console.log('[OnInit AlbumsFormComponent]');
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
