import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-editor',
  template: `
    <p-editor [style]="{'height':'320px'}"></p-editor>
  `,
  styleUrls: ['./ng-editor.component.css']
})
export class NgEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
