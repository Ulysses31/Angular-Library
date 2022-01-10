import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';
import { AlbumDto } from '../../../api/models/album-dto';

@Injectable()
export class AlbumsFormViewModelService extends AppBaseViewModelService<AlbumDto> {
  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<AlbumDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Post Form';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<AlbumDto> {
    console.log(
      `Albums Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: AlbumDto): Observable<AlbumDto> {
    console.log('postCb from AlbumsFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: AlbumDto): Observable<AlbumDto> {
    console.log('putCb from AlbumsFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from AlbumsFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: AlbumDto): Observable<AlbumDto> {
    item = {
      id: '0',
      userId: 0,
      title: '',
    };
    return of(item);
  }
}
