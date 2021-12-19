import { NgModule } from '@angular/core';
import { NgInputTextComponent } from './controls/ng-input-text/ng-input-text.component';
import { NgInputSearchComponent } from './controls/ng-input-search/ng-input-search.component';
@NgModule({
  declarations: [NgInputTextComponent, NgInputSearchComponent],
  imports: [],
  exports: [NgInputTextComponent, NgInputSearchComponent],
})
export class CorelibModule {}
