import { AfterViewInit, Directive, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgBaseEntity } from '../../models/base-entity';
import { SlBaseSearchModel } from '../../models/base-search-model';

@Directive()
export abstract class NgPagedListViewModelService<TModel extends NgBaseEntity>
  implements OnInit, AfterViewInit, OnDestroy
{
  model?: TModel[];
  selectedModel?: TModel;
  modelStruct?: string[];

  abstract search(searchModel: SlBaseSearchModel): Observable<TModel[]>;
  abstract getById(id: string): Observable<TModel>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
