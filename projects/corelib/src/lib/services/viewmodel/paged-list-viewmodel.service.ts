import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgBaseEntity } from '../../models/base-entity';
import { SlBaseSearchModel } from '../../models/base-search-model';

@Directive()
export abstract class NgPagedListViewModelService<TModel extends NgBaseEntity>
  implements OnInit, OnDestroy
{
  abstract search(searchModel: SlBaseSearchModel): Observable<TModel[]>;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
