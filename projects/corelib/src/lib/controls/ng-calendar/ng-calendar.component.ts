import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'ng-calendar',
  template: `
    <p-calendar
      [ngClass]="{ 'inValid' : isValid }"
      [showTime]="showTime"
      [hourFormat]="hourFormat"
      [readonlyInput]="readonlyInput"
      [showButtonBar]="showButtonBar"
      [showIcon]="showIcon"
      [touchUI]="touchUI"
      [dateFormat]="dateFormat"
      [(ngModel)]="value"
      (blur)="onBlur()"
    ></p-calendar>
  `,
  styleUrls: ['./ng-calendar.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgCalendarComponent),
      multi: true,
    },
  ]
})
export class NgCalendarComponent implements OnInit {
  @Input() isValid: boolean = true;
  @Input() showTime: boolean = true;
  @Input() hourFormat: string = '24';
  @Input() readonlyInput: boolean = true;
  @Input() showButtonBar: boolean = true;
  @Input() showIcon: boolean = true;
  @Input() touchUI: boolean = false;
  @Input() dateFormat: string = "dd/mm/yy";
  private innerValue: any = '';

  constructor() { }

  ngOnInit(): void {
  }

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
