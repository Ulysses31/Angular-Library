import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module')
      .then(m => m.PostsModule)
  },
  {
     path: 'comments',
     loadChildren: () => import('./features/comments/comments.module')
      .then(m => m.CommentsModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./features/albums/albums.module')
      .then(m => m.AlbumsModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./features/photos/photos.module')
      .then(m => m.PhotosModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/todos/todos.module')
      .then(m => m.TodosModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module')
      .then(m => m.UsersModule)
  },
  { path: '**', redirectTo: 'posts' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
