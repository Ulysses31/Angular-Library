import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'ng-input-switch',
  template: `
    <p-inputSwitch
      [(ngModel)]="value"
    >
    </p-inputSwitch>
  `,
  styleUrls: ['./ng-input-switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgInputSwitchComponent),
      multi: true,
    },
  ],
})
export class NgInputSwitchComponent implements OnInit, ControlValueAccessor {
  @Input() checked: boolean = false;
  private innerValue: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  }

  set value(val: boolean) {
    if(val !== this.innerValue) {
      this.innerValue = val;
      this.onChangeCallback(val);
    }
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: boolean): void {
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
