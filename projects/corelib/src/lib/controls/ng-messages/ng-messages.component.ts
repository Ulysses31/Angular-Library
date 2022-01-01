import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'ng-messages',
  template: `
    <p-messages
      [(value)]="messages"
    ></p-messages>
  `,
  styleUrls: ['./ng-messages.component.css'],
})
export class NgMessagesComponent implements OnInit, OnDestroy {
  @Input() message?: Message | any;
  messages: Message[] = [];

  constructor() {}

  ngOnInit(): void {
    this.messages.push(this.message);
  }

  ngOnDestroy(): void {
    this.messages = [];
  }
}
