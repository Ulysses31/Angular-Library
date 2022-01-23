import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { AlbumsFormComponent } from './albums-form/albums-form.component';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsFormComponent
  ],
  imports: [SharedModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
