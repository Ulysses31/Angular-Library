import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'lib-ng-toast',
  template: ` <p-toast position="top-left" life="3000"></p-toast> `,
  styleUrls: ['./ng-toast.component.css'],
})
export class NgToastComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
}
