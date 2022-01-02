import { Directive } from '@angular/core';
import { NgBaseEntity, NgPagedListViewModelService } from 'projects/corelib/src/public-api';

@Directive()
export abstract class AppBaseListViewModelService<
  TModel extends NgBaseEntity
> extends NgPagedListViewModelService<TModel> {

  // private _isBusy$ = new Subject<boolean>();

  // get isBusy$(): Observable<boolean> {
  //   return this._isBusy$.asObservable();
  // }

  // public emitIsBusy(isBusy: boolean): void {
  //   this._isBusy$.next(isBusy);
  // }

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
