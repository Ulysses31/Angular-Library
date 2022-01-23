import { CommentsFormComponent } from './comments-form/comments-form.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [CommentsComponent, CommentsFormComponent],
  imports: [SharedModule, CommentsRoutingModule],
})
export class CommentsModule {}
