import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SideMenuEntity } from 'corelib';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenuBarComponent implements OnInit, AfterViewInit, OnDestroy {
  sideBarTitle: string = 'Content';
  isVisible: boolean = false;
  menuItems: SideMenuEntity[] = [];

  constructor() {
    this.menuItems= [
      {
        label: 'Posts',
        routerLink: ['/posts'],
        items: []
      },
      {
        label: 'Comments',
        routerLink: ['/comments'],
        items: []
      },
      {
        label: 'Albums',
        routerLink: ['/albums'],
        items: []
      },
      {
        label: 'Photos',
        routerLink: ['/photos'],
        items: []
      },
      {
        label: 'Todos',
        routerLink: ['/todos'],
        items: []
      },
      {
        label: 'Users',
        routerLink: ['/users'],
        items: []
      }
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const elem = document.querySelector('#menuImage') as HTMLImageElement;
      elem.onclick = () => this.isVisible = !this.isVisible;
    });
  }

  ngOnDestroy(): void {}

  resetVisibility(): void {
    this.isVisible = false;
  }
}
