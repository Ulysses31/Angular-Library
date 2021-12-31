import { Directive } from '@angular/core';
import { NgBaseEntity, NgSingleViewModelService } from 'corelib';

@Directive()
export abstract class GenesisBaseViewModelService<
  TModel extends NgBaseEntity
> extends NgSingleViewModelService<TModel> {
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
