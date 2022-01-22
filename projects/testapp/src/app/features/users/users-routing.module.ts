import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'edit/:id',
        component: UsersFormComponent,
        data: {},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
