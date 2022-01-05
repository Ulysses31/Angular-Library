import { NgModule } from '@angular/core';
import { CorelibModule, NgPagedListFullComponent } from 'corelib';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CorelibModule],
  exports: [CorelibModule]
})
export class SharedModule {}
