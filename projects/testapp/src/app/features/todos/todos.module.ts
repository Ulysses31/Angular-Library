import { TodosFormComponent } from './todos-form/todos-form.component';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent, TodosFormComponent],
  imports: [SharedModule, TodosRoutingModule]
})
export class TodosModule {}
