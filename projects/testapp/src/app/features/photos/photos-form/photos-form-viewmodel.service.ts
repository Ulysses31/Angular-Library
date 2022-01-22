import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'corelib';
import { Observable, of } from 'rxjs';
import { PhotoDto } from '../../../api/models/photo-dto';
import { AppBaseViewModelService } from '../../../core/app-base-viewmodel.service';

@Injectable()
export class PhotosFormViewModelService extends AppBaseViewModelService<PhotoDto> {
  protected resetCb = this.resetModel.bind(this);
  protected postCb = this.post.bind(this);
  protected putCb = this.put.bind(this);
  protected deleteCb = this.delete.bind(this);

  constructor(
    public override injector: Injector,
    private apiService: ApiService<PhotoDto>
  ) {
    super(injector);
    this.apiService.setApiServiceUrl(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.label = 'Photos Form';
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getById(id: string): Observable<PhotoDto> {
    console.log(
      `Photos Form viewmodel getById called...fetching ${this.apiService.getApiServiceUrl()}`
    );
    return this.apiService.getById(id);
  }

  post(item: PhotoDto): Observable<PhotoDto> {
    console.log('postCb from PhotosFormViewModelService');
    return this.apiService.insert(item);
  }

  put(id: string, item: PhotoDto): Observable<PhotoDto> {
    console.log('putCb from PhotosFormViewModelService');
    return this.apiService.update(id, item);
  }

  delete(id: string): Observable<void> {
    console.log('deleteCb from PhotosFormViewModelService');
    return this.apiService.delete(id);
  }

  resetModel(item: PhotoDto): Observable<PhotoDto> {
    item = {
      id: '0',
      albumId: 0,
      title: '',
      url: '',
      thumbnailUrl: '',
    };
    return of(item);
  }
}
