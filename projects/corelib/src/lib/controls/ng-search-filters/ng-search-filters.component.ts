import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-search-filters',
  template: `
    <div [ngStyle]="{ display: showFilters ? 'initial' : 'none' }">
      <p-toolbar class="shadow">
        <p-accordion class="filterAccordion">
          <p-accordionTab header="Filters">
            <div style="display: flex; justify-content: flex-start; flex-wrap: wrap">
              <div *ngFor="let item of filterData" style="margin: 10px 10px">
                <!-- {{item | json}} -->
                <div style="display: flex; flex-direction: column">
                  <label>{{item.title | uppercase}}</label>
                  <div style="display: flex;">
                    <ng-dropdown [dataList]="data" [dropTitle]="title"></ng-dropdown>
                    <ng-input-text *ngIf="item.type === 'string'"></ng-input-text>
                    <ng-input-number *ngIf="item.type === 'number'"></ng-input-number>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <ng-button
              [label]="search"
              [visible]="true"
              [command]="searchCmd"
            ></ng-button>
            <ng-button
              [label]="clear"
              [visible]="true"
              [command]="clearCmd"
            ></ng-button>
          </p-accordionTab>
        </p-accordion>
      </p-toolbar>
      <br />
    </div>
  `,
  styleUrls: ['./ng-search-filters.component.css'],
})
export class NgSearchFiltersComponent implements OnInit {
  @Input() showFilters?: boolean = false || undefined;
  @Input() filterData: { type: string, title: string }[] = [];
  @Input() searchCmd?: () => any;
  @Input() clearCmd?: () => any;
  data: { name: string; code: string }[] = [];
  title: string = '';
  search: string = 'Αναζήτηση';
  clear: string = 'Εκκαθάριση';

  constructor() {
    this.data = [
      { name: 'Ίσο με', code: 'equal' },
      { name: 'Όχι ίσο με', code: 'not-equal' },
      { name: 'Περιέχει', code: 'contain' },
      { name: 'Δεν περιέχει', code: 'not-contain' },
      { name: 'Ξεκινάει με', code: 'starts' },
    ];
  }

  ngOnInit(): void {}

}
