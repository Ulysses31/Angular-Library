import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { noop, Subject } from 'rxjs';

@Component({
  selector: 'ng-input-text-area',
  template: `
    <textarea
      pInputTextarea
      rows="5"
      class="p-inputtext p-component noSize"
      [ngClass]="{ 'inValid' : isValid }"
      [(ngModel)]="value"
      (blur)="onBlur()"
    >
    </textarea>
  `,
  styleUrls: ['./ng-input-text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgInputTextAreaComponent),
      multi: true,
    },
  ],
})
export class NgInputTextAreaComponent implements OnInit, ControlValueAccessor {
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
