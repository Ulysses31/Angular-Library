import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { CommentsComponent } from './comments.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CommentsComponent
      },
      {
        path: 'edit/:id',
        component: CommentsFormComponent,
        data: {}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
