import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PhotosComponent,
      },
      {
        path: 'edit/:id',
        component: PhotosFormComponent,
        data: {},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
