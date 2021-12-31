import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgBaseEntity } from '../../models/base-entity';

@Directive()
export abstract class NgSingleViewModelService<TModel extends NgBaseEntity>
  implements OnInit, OnDestroy
{
  model?: TModel;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
