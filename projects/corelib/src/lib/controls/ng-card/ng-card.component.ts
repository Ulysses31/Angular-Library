import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-card',
  template: `
    <p-card
      header="Advanced Card"
      subheader="Card Subheader"
      [style]="{ width: '360px' }"
      styleClass="p-card-shadow"
    >
      <ng-template pTemplate="header">
        <img alt="Card" src="assets/showcase/images/usercard.png" />
      </ng-template>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
      <ng-template pTemplate="footer">
        <p-button label="Save" icon="pi pi-check"></p-button>
        <p-button
          label="Cancel"
          icon="pi pi-times"
          styleClass="p-button-secondary"
          [style]="{ 'margin-left': '.5em' }"
        ></p-button>
      </ng-template>
    </p-card>
  `,
  styleUrls: ['./ng-card.component.css'],
})
export class NgCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
