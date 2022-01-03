import { NgModule, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MenuBarComponent } from './menubar.component';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [SharedModule],
  exports: [MenuBarComponent]
})
export class MenuBarModule {}
