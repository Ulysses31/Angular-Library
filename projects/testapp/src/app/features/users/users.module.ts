import { UsersFormComponent } from './users-form/users-form.component';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, UsersFormComponent],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
