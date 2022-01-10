import { IApiService } from '../../interfaces/api-service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService<TModel> implements IApiService<TModel> {
  private apiServiceUrl: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getApiServiceUrl(): string {
    return this.apiServiceUrl;
  }

  setApiServiceUrl(url: string): void {
    if (url) this.apiServiceUrl = url;
  }

  getAll(): Observable<TModel[]> {
    return this.http.get<TModel[]>(this.apiServiceUrl, this.httpOptions);
  }

  getById(id: string): Observable<TModel> {
    return this.http.get<TModel>(
      `${this.apiServiceUrl}/${id}`,
      this.httpOptions
    );
  }

  insert(model: TModel): Observable<TModel> {
    return this.http.post<TModel>(
      this.apiServiceUrl,
      { body: model },
      this.httpOptions
    );
  }

  update(id: string, model: TModel): Observable<TModel> {
    return this.http.put<TModel>(
      `${this.apiServiceUrl}/${id}`,
      { body: model },
      this.httpOptions
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServiceUrl}/${id}`,
      this.httpOptions
    );
  }
}
