import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgBaseEntity } from '../../models/base-entity';
import { NgSingleViewModelService } from '../../services/viewmodel/single-viewmodel.service';

@Component({
  selector: 'ng-single-full-entity',
  template: `
    <ng-container *ngIf="VM">
      <div class="pagedListFullContainer">
        <div class="fmain">
          <div class="header">
            <h1>{{ VM.label }} (id: {{ VM.model && VM.model.id }})</h1>
          </div>
          <div class="headerActions">
            <ng-header-actions
              [actions]="$any(VM.headerActions)"
            ></ng-header-actions>
          </div>
        </div>
        <div
          class="preTemplate"
          [ngStyle]="{ display: VM.toggleModelPre ? 'block' : 'none' }"
        >
          <pre>{{ VM.model | json }}</pre>
        </div>
        <ng-messages *ngIf="VM.message" [message]="VM.message"> </ng-messages>
        <p-panel class="shadow">
          <ng-content></ng-content>
        </p-panel>
      </div>
      <ng-full-spinner [isBusy]="VM.isBusy"></ng-full-spinner>
      <ng-dialog [dialogMessageContent]="VM.dialogMessageContent"></ng-dialog>
      <ng-confirm-dialog></ng-confirm-dialog>
    </ng-container>
  `,
  styleUrls: ['./ng-single-full.component.css'],
})
export class NgSingleFullEntityComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() VM?: NgSingleViewModelService<NgBaseEntity>;

  constructor() {
    console.log('[OnInit NgSingleFullEntityComponent]');
  }

  ngOnInit(): void {
    this.VM?.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.VM?.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    this.VM?.ngOnDestroy();
  }
}
