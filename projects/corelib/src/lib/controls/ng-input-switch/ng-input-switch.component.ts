import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-input-switch',
  template: `
    <p-inputSwitch
      [id]="id"
      [name]="name"
      [(ngModel)]="checked"
    >
    </p-inputSwitch>
  `,
  styleUrls: ['./ng-input-switch.component.css'],
})
export class NgInputSwitchComponent implements OnInit {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
