import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CorelibModule } from 'corelib';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CorelibModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CorelibModule
  ]
})
export class SharedModule {}
