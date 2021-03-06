import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Message } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CoreLib Test App';

  constructor(private _primeNgConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this._primeNgConfig.ripple = true;
  }
}
