import { PhotosFormComponent } from './photos-form/photos-form.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

@NgModule({
  declarations: [PhotosComponent, PhotosFormComponent],
  imports: [SharedModule, PhotosRoutingModule],
})
export class PhotosModule {}
