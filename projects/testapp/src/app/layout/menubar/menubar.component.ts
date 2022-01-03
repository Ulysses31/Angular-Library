import { Component, OnInit, AfterViewInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenuBarComponent implements OnInit, AfterViewInit, OnDestroy {
  sideBarTitle: string = 'Content';
  isVisible: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const elem = document.querySelector('#menuImage') as HTMLImageElement;
      elem.onclick = () => {
        this.isShow();
      }
    });
  }

  ngOnDestroy(): void {}

  isShow(): void {
    console.log('Clicked...');
  }
}
