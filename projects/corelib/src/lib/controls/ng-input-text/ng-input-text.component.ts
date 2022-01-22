import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

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
        [ngClass]="{ 'inValid' : isValid }"
        [(ngModel)]="value"
        (blur)="onBlur()"
      />
    </span>
  `,
  styleUrls: ['./ng-input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgInputTextComponent),
      multi: true,
    },
  ],
})
export class NgInputTextComponent implements OnInit, ControlValueAccessor {
  @Input() isBusy: boolean = false;
  @Input() isValid: boolean = false;
  private innerValue: any = '';

  constructor() {}

  ngOnInit(): void {}

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  }

  set value(val: any) {
    if(val !== this.innerValue) {
      this.innerValue = val;
      this.onChangeCallback(val);
    }
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: any): void {
    if(value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
