import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-ng-menubar',
  template: `
    <p-menubar [model]="items">
      <input type="text" class="p-inputtext p-component" pInputText placeholder="Search" />
      <button pButton label="Logout" icon="pi pi-power-off"></button>
    </p-menubar>
  `,
  styleUrls: ['./ng-menubar.component.css'],
})
export class NgMenubarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
