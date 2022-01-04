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

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
