import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-panel',
  template: `
    <p-panel>
      <ng-template pTemplate="header"> Header content here </ng-template>
      Body Content
      <ng-template pTemplate="footer"> Footer content here </ng-template>
    </p-panel>
  `,
  styleUrls: ['./ng-panel.component.css'],
})
export class NgPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
