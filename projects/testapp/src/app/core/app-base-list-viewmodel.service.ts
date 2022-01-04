import { Directive } from '@angular/core';
import { NgBaseEntity, NgPagedListViewModelService } from 'projects/corelib/src/public-api';

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

  override ngAfterViewInit(): void {
      super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
