import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CorelibModule } from 'corelib';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CorelibModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
    CorelibModule
  ]
})
export class SharedModule {}
