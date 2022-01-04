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

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
