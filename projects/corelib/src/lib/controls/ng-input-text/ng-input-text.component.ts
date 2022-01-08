import { Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-input-text',
  template: `
    <span class="p-input-icon-right">
      <i
        class="pi pi-spin pi-spinner"
        [ngStyle]="{ display: isBusy ? 'initial' : 'none' }"
      >
      </i>
      <input
        type="text"
        pInputText
        class="p-inputtext p-component"
        [name]="$any(name)"
        [(ngModel)]="nmodel"
      />
    </span>
  `,
  styleUrls: ['./ng-input-text.component.css'],
})
export class NgInputTextComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() nmodel: string | undefined;
  @Input() isBusy: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
