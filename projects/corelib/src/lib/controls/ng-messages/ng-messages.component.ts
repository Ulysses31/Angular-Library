import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'lib-ng-messages',
  template: ` <p-messages severity="warn" [(value)]="msgs"></p-messages> `,
  styleUrls: ['./ng-messages.component.css'],
})
export class NgMessagesComponent implements OnInit {
  msgs: Message[] = [];

  constructor() {}

  ngOnInit(): void {
    this.msgs.push({
      severity: 'info',
      summary: 'Info Message',
      detail: 'PrimeNG rocks',
    });
  }
}
