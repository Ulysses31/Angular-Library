import { Observable } from 'rxjs';

/**
 * @author Iordanidis Chris
 * @description ApiService<T> interface
 */
export interface IApiService<TModel> {
  /**
   * @description Returns the api url
   */
  getApiServiceUrl(): string;

  /**
   * @description Set the api url
   * @param url string
   */
  setApiServiceUrl(url: string): void;

  /**
   * @description Get list of T
   * @returns Observable<T[]>
   */
  getAll(): Observable<TModel[]>;

  /**
   * @description Get T by id
   * @param id number
   * @returns Observable<T>
   */
  getById(id: string): Observable<TModel>;

  /**
   * @description Insert new T
   * @param model T
   * @returns Observable<T>
   */
  insert(model: TModel): Observable<TModel>;

  /**
   * @description Update existing T
   * @param id string
   * @param model T
   * @returns Observable<T>
   */
  update(id: string, model: TModel): Observable<TModel>;

  /**
   * @description Delete existing T
   * @param id number
   * @returns Observable<T>
   */
  delete(id: number): Observable<TModel>;
}
