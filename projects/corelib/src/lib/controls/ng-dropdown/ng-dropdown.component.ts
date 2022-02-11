import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'rxjs';
import { FilterDropDownData } from '../../models/filter-dropdown-data';

@Component({
  selector: 'ng-dropdown',
  template: `
    <p-dropdown
    optionLabel="name"
      [options]="dataList"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [placeholder]="dropTitle"
      [(ngModel)]="value"
      (blur)="onBlur()"
    >
    </p-dropdown>
  `,
  styleUrls: ['./ng-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgDropdownComponent),
      multi: true,
    },
  ],
})
export class NgDropdownComponent implements OnInit {
  @Input() dataList: FilterDropDownData[] = [];
  @Input() dropTitle: string = '';
  @Input() optionLabel: string = '';
  @Input() optionValue: string = '';
  private innerValue: any = '';

  constructor() { }

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
