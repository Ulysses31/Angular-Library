import { Observable, of, tap } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { AppBaseListViewModelService } from '../../core/app-base-list-viewmodel.service';
import { NgBaseSearchModel } from 'projects/corelib/src/public-api';
import { ApiService } from 'corelib';
import { AlbumDto } from '../../api/models/album-dto';
import { Router } from '@angular/router';

@Injectable()
export class AlbumsViewModelService extends AppBaseListViewModelService<AlbumDto> {
  constructor(
    private apiService: ApiService<AlbumDto>,
    private router: Router
  ) {
    super();
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Albums';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  search(searchModel: NgBaseSearchModel): Observable<AlbumDto[]> {
    console.log(
      `Albums viewmodel search called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getAll();
  }

  getById(id: string): Observable<AlbumDto> {
    console.log(
      `Albums viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return of({});
  }

  editModel(selectedRow: any): void {
    this.router.navigate(['albums/edit', selectedRow.id], {
      queryParams: { backUrl: this.router.url },
    });
  }
}
