import { Directive } from '@angular/core';
import { NgBaseEntity, NgPagedListViewModelService } from 'corelib';

@Directive()
export abstract class AppBaseListViewModelService<
  TModel extends NgBaseEntity
> extends NgPagedListViewModelService<TModel> {
  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
