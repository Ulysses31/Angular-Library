import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [SharedModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
