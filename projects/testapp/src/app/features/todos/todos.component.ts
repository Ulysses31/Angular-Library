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

  override ngOnInit(): void {}

  override ngAfterViewInit(): void {}

  override ngOnDestroy(): void {}
}
