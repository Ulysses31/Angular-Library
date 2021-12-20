import { NgModule } from '@angular/core';
import { NgInputTextComponent } from './controls/ng-input-text/ng-input-text.component';
import { NgInputSearchComponent } from './controls/ng-input-search/ng-input-search.component';
import { NgButtonComponent } from './controls/ng-button/ng-button.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    NgInputTextComponent,
    NgInputSearchComponent,
    NgButtonComponent
  ],
  imports: [
    ButtonModule,
    RippleModule
  ],
  exports: [
    NgInputTextComponent,
    NgInputSearchComponent,
    NgButtonComponent
  ],
})
export class CorelibModule {}
