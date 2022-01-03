import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ng-sidebar',
  template: `
    <p-sidebar
      [(visible)]="display"
      position="left"
      [fullScreen]="fullScreen"
      (onHide)="onHide()"
      >{{ sideBarTitle }}</p-sidebar
    >
  `,
  styleUrls: ['./ng-sidebar.component.css'],
})
export class NgSidebarComponent implements OnInit, OnDestroy {
  @Input() sideBarTitle: string = '';
  @Input() display: boolean = false;
  @Input() fullScreen: boolean = false;
  test: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.test.subscribe({
      next: (data) => (this.display = data),
    });
  }

  ngOnDestroy(): void {
    this.test.unsubscribe();
  }

  onHide(): void {
    this.display = false;
    console.log('Hided...', this.display);
  }

  @Input() isShow(): void {
    console.log('called from outside...');
    this.test.next(true);
  }
}
