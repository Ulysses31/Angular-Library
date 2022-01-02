import { NgModule } from '@angular/core';
import { CorelibModule } from 'corelib';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CorelibModule],
  exports: [CorelibModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
