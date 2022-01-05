import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared.module';
@NgModule({
  declarations: [PostsComponent],
  imports: [SharedModule, PostsRoutingModule],
})
export class PostsModule {}
