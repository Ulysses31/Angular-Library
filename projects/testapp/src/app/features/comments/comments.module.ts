import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [CommentsComponent],
  imports: [SharedModule, CommentsRoutingModule],
})
export class CommentsModule {}
