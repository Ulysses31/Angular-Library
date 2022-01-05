import { ApiService } from 'corelib';
import { TodosViewModelService } from './todos-viewmodel.service';
import { Component, OnInit } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosViewModelService, ApiService],
})
export class TodosComponent extends AppBaseListComponent {
  constructor(public VM: TodosViewModelService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.VM.headerActions.unshift({
      icon: 'pi pi-pencil',
      iconPosition: 'left',
      label: 'Edit',
      ngClass: 'p-button-raised p-button-sm p-button-warning',
      visible: true,
      command: () => {
        if (this.baseList.gridApi?.getSelectedRows().length !== 1) {
          this.showDialogMessage();
        } else {
          this.VM.editModel(this.baseList.gridApi?.getSelectedRows()[0]!);
        }
      },
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private showDialogMessage(): void {
    this.VM.dialogMessageContent.display = true;
    this.VM.dialogMessageContent.content = 'Select one row please!';
  }
}
