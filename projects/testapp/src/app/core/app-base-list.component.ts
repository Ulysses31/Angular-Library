import {
  Directive,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgPagedListFullComponent } from 'corelib';

@Directive()
export abstract class AppBaseListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(NgPagedListFullComponent) baseList!: NgPagedListFullComponent;

  constructor() {
    console.log('[OnInit AppBaseListComponent]');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
