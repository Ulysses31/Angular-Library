import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
      },
      {
        path: 'edit/:id',
        component: TodosFormComponent,
        data: {},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
