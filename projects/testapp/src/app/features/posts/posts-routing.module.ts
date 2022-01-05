import { PostsFormComponent } from './posts-form/posts-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'edit/:id',
        component: PostsFormComponent,
        data: {}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
