import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsFormComponent } from './albums-form/albums-form.component';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AlbumsComponent
      },
      {
        path: 'edit/:id',
        component: AlbumsFormComponent,
        data: {}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
