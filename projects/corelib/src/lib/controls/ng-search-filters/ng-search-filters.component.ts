import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-search-filters',
  template: `
    <div [ngStyle]="{ display: showFilters ? 'initial' : 'none' }">
      <p-toolbar class="shadow">
        <p-accordion class="filterAccordion">
          <p-accordionTab header="Filters"> Content 1 </p-accordionTab>
        </p-accordion>
      </p-toolbar>
      <br />
    </div>
  `,
  styleUrls: ['./ng-search-filters.component.css'],
})
export class NgSearchFiltersComponent implements OnInit {
  @Input() showFilters?: boolean = false || undefined;

  constructor() {}

  ngOnInit(): void {}
}
