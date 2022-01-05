import { Directive, AfterViewInit } from '@angular/core';
import { NgBaseEntity } from 'corelib';
import { NgSingleViewModelService } from 'projects/corelib/src/public-api';

@Directive()
export abstract class AppBaseViewModelService<
  TModel extends NgBaseEntity
> extends NgSingleViewModelService<TModel> {
  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
