import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SideMenuEntity } from 'corelib';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenuBarComponent implements OnInit, AfterViewInit, OnDestroy {
  sideBarTitle: string = 'Content';
  isVisible: boolean = true;
  menuItems: SideMenuEntity[] = [];

  constructor() {
    this.menuItems= [
      {
        label: 'Posts',
        routerLink: ['/posts'],
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
