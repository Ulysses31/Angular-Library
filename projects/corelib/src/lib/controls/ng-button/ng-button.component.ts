import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-button',
  template: `
    <p-button
      [label]="$any(label)"
      [icon]="$any(icon)"
      [iconPos]="$any(iconPosition)"
      [styleClass]="$any(ngClass)"
      [ngStyle]="{ display: visible ? 'initial' : 'none' }"
      class="m-2"
      [loadingIcon]="$any(loadingIcon)"
      [loading]="$any(loading)"
      [disabled]="$any(disabled)"
      (onClick)="command()"
    ></p-button>
  `,
  styleUrls: ['./ng-button.component.css']
})
export class NgButtonComponent implements OnInit {
  @Input() id?: string;
  @Input() label?: string;
  @Input() icon?: string;
  @Input() iconPosition?: string;
  @Input() ngClass?: string; //p-button-raised p-button-rounded p-button-sm p-button-warning
  @Input() style?: string;
  @Input() loadingIcon?: string;
  @Input() loading?: boolean;
  @Input() disabled?: boolean;
  @Input() visible?: boolean;
  @Input() command?: any;

  constructor() { }

  ngOnInit(): void { }
}
