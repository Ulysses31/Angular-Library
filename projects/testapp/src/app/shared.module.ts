import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CorelibModule, NgInputTextComponent } from 'corelib';
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
