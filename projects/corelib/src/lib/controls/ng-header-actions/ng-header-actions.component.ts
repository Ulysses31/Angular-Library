import { Component, OnInit, Input } from '@angular/core';
import { NgHeaderAction } from '../../interfaces/ngHeaderAction';

@Component({
  selector: 'ng-header-actions',
  templateUrl: './ng-header-actions.component.html',
  styleUrls: ['./ng-header-actions.component.css'],
})
export class NgHeaderActionsComponent implements OnInit {
  @Input() actions: NgHeaderAction[] = [];

  constructor() { }

  ngOnInit(): void {}
}
