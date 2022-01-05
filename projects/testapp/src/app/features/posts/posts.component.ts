import { PostsViewModelService } from './posts-viewmodel.service';
import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { ApiService } from 'corelib';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsViewModelService, ApiService],
})
export class PostsComponent extends AppBaseListComponent {
  constructor(public VM: PostsViewModelService) {
    super();
    console.log('[OnInit PostsComponent]');
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.VM.headerActions.unshift(
      {
        icon: 'pi pi-pencil',
        iconPosition: 'left',
        label: 'Edit',
        ngClass: 'p-button-raised p-button-sm p-button-warning',
        visible: true,
        command: () => {
          if(this.baseList.gridApi?.getSelectedRows().length !== 1) {
            this.showDialogMessage();
          } else {
          this.VM.editModel(this.baseList.gridApi?.getSelectedRows()[0]!)
          }
        }
      }
    );
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  private showDialogMessage(): void {
    this.VM.dialogMessageContent.display = true;
    this.VM.dialogMessageContent.content = 'Select one row please!';
  }
}
