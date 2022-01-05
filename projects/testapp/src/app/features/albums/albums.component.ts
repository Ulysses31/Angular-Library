import { ApiService } from 'corelib';
import { Component } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { AlbumsViewModelService } from './albums-viewmodel.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumsViewModelService, ApiService],
})
export class AlbumsComponent extends AppBaseListComponent {
  constructor(public VM: AlbumsViewModelService) {
    super();
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
