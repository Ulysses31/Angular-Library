import { Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';
import { PhotoDto } from '../../api/models/photo-dto';
import { Router } from '@angular/router';

@Injectable()
export class PhotosViewModelService extends AppBaseListViewModelService<PhotoDto> {
  constructor(
    private apiService: ApiService<PhotoDto>,
    private router: Router
  ) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Photos';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<PhotoDto[]> {
    console.log(
      `Photos viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<PhotoDto> {
    console.log(
      `Photos viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: any): void {
    this.router.navigate(['photos/edit', selectedRow.id], {
      queryParams: { backUrl: this.router.url },
    });
  }
}
