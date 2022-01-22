import { Component } from '@angular/core';
import { AppBaseComponent } from '../../../core/app-base.component';
import { ApiService } from 'corelib';
import { NgForm } from 'projects/corelib/node_modules/@angular/forms/forms';
import { TodosFormViewModelService } from './todos-form-viewmodel.service';

@Component({
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
  providers: [TodosFormViewModelService, ApiService],
})
export class TodosFormComponent extends AppBaseComponent {
  constructor(public VM: TodosFormViewModelService) {
    super();
    console.log('[OnInit TodosFormComponent]');
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

  formStatus(frm: NgForm): void {
    const idx = this.VM.headerActions.findIndex((item) => item.id === 'save');
    this.VM.headerActions[idx].disabled = !frm.valid;
  }
}
