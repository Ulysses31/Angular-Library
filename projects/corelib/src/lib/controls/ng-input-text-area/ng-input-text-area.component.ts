import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-input-text-area',
  template: `
    <textarea
      pInputTextarea
      rows="5"
      class="p-inputtext p-component noSize"
      [name]="$any(name)"
      [(ngModel)]="nmodel"
    >
    </textarea>
  `,
  styleUrls: ['./ng-input-text-area.component.css'],
})
export class NgInputTextAreaComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() nmodel: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
