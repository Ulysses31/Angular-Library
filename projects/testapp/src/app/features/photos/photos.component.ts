import { ApiService } from 'corelib';
import { Component, OnInit } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { PhotosViewModelService } from './photos-viewmodel.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotosViewModelService, ApiService],
})
export class PhotosComponent extends AppBaseListComponent {
  constructor(public VM: PhotosViewModelService) {
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
