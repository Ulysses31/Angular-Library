import { Directive, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Message } from 'primeng/api';
import { NgHeaderAction } from '../../interfaces/ngHeaderAction';
import { NgBaseEntity } from '../../models/base-entity';
import { DialogMessageEntity } from '../../models/dialog-message-entity';

@Directive()
export abstract class NgSingleViewModelService<TModel extends NgBaseEntity>
  implements OnInit, AfterViewInit, OnDestroy
{
  model?: TModel;
  label: string | undefined;
  message: Message | undefined;
  isBusy: boolean = false;
  headerActions: NgHeaderAction[] = [];
  toggleModelPre: boolean = false;
  dialogMessageContent: DialogMessageEntity = {
    display: false,
    title: 'Message',
    content: ''
  };

  constructor() {}

  ngOnInit(): void {
    this.headerActions.push(
      {
        icon: 'pi pi-refresh',
        iconPosition: 'left',
        label: 'Refresh',
        ngClass: 'p-button-raised p-button-sm p-button-info',
        visible: true,
        command: () => console.log('refresh model')
      },
      {
        icon: 'pi pi-id-card',
        iconPosition: 'left',
        label: 'Model',
        ngClass: 'p-button-raised p-button-sm p-button-danger',
        visible: true,
        command: () => this.toggleModelPre = !this.toggleModelPre
      }
    );
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
