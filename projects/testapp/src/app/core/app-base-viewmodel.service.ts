import { Directive, Injector } from '@angular/core';
import { NgSingleViewModelService, NgBaseEntity } from 'corelib';

@Directive()
export abstract class AppBaseViewModelService<
  TModel extends NgBaseEntity
> extends NgSingleViewModelService<TModel> {
  constructor(
    public override injector: Injector
  ) {
    super(injector);
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
