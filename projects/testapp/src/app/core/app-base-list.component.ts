import {
  Directive,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgPagedListFullComponent } from 'projects/corelib/src/public-api';

@Directive()
export abstract class AppBaseListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(NgPagedListFullComponent, { static: true })
  baseList: NgPagedListFullComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
