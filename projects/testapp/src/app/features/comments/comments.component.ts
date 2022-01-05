import { Component } from '@angular/core';
import { ApiService } from 'corelib';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { CommentsViewModelService } from './comments-viewmodel.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsViewModelService, ApiService],
})
export class CommentsComponent extends AppBaseListComponent {
  constructor(public VM: CommentsViewModelService) {
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
