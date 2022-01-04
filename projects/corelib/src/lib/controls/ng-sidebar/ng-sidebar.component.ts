import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { SideMenuEntity } from '../../models/side-menu-entity';

@Component({
  selector: 'ng-sidebar',
  template: `
    <p-sidebar
      position="left"
      [(visible)]="display"
      [fullScreen]="fullScreen"
      (onShow)="onShow()"
      (onHide)="onHide()"
      >{{ sideBarTitle }}
      <ul *ngFor="let item of menuItems">
        <li>
          <a
            [routerLink]="item.routerLink"
            routerLinkActive="router-link-active"
            (click)="onHide()"
          >
            {{item.label}}
          </a>
        </li>
      </ul>
    </p-sidebar>
  `,
  styleUrls: ['./ng-sidebar.component.css'],
})
export class NgSidebarComponent implements OnInit, OnDestroy {
  @Input() sideBarTitle: string = '';
  @Input() display: boolean = false;
  @Input() fullScreen: boolean = false;
  @Input() menuItems: SideMenuEntity[] = [];
  @Output() resetVisibility: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onShow(): void {}

  onHide(): void {
    this.resetVisibility.emit();
  }
}
