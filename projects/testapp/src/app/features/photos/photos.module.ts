import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

@NgModule({
  declarations: [PhotosComponent],
  imports: [SharedModule, PhotosRoutingModule],
})
export class PhotosModule {}
