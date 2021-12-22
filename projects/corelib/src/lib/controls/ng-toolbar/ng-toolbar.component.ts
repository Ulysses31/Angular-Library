import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-ng-toolbar',
  template: `
    <p-toolbar>
      <div class="p-toolbar-group-left">
        <p-button label="New" icon="pi pi-plus"></p-button>
        <p-button
          label="Upload"
          icon="pi pi-upload"
          styleClass="p-button-success"
        ></p-button>

        <i class="pi pi-bars"></i>

        <p-splitButton
          label="Save"
          icon="pi pi-check"
          [model]="items"
          styleClass="p-button-warning"
        ></p-splitButton>
      </div>

      <div class="p-toolbar-group-right">
        <p-button icon="pi pi-search"></p-button>
        <p-button
          icon="pi pi-calendar"
          styleClass="p-button-success"
        ></p-button>
        <p-button icon="pi pi-times" styleClass="p-button-danger"></p-button>
      </div>
    </p-toolbar>
  `,
  styleUrls: ['./ng-toolbar.component.css'],
})
export class NgToolbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Open', icon: 'pi pi-download' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' },
        ],
      },
    ];
  }
}
