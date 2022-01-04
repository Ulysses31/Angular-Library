import { ApiService } from 'corelib';
import { Component, OnInit } from '@angular/core';
import { AppBaseListComponent } from '../../core/app-base-list.component';
import { UsersViewModelService } from './users-viewmodel.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersViewModelService, ApiService],
})
export class UsersComponent extends AppBaseListComponent {
  constructor(public VM: UsersViewModelService) {
    super();
  }

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
