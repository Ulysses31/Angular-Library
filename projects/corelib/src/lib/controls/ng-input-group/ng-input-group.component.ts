import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-input-group',
  template: `
    <!-- <div class="p-col-4 p-md-4"> -->
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon"><i class="pi pi-user"></i></span>
        <input type="text" pInputText placeholder="Username" />
      </div>
    <!-- </div> -->
  `,
  styleUrls: ['./ng-input-group.component.css'],
})
export class NgInputGroupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
