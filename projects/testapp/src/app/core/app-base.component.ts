import { AfterViewInit, Directive, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgSingleFullEntityComponent } from 'projects/corelib/src/public-api';
@Directive()
export abstract class AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(NgSingleFullEntityComponent, { static: true })
    singleEntity!: NgSingleFullEntityComponent;

  constructor() {
    console.log('[OnInit AppBaseComponent]');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

}
