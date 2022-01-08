import {
  Directive,
  OnDestroy,
  OnInit,
  AfterViewInit,
  Injector,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
import { Observable, tap, switchMap, of, iif, finalize } from 'rxjs';
import { NgHeaderAction } from '../../interfaces/ngHeaderAction';
import { NgBaseEntity } from '../../models/base-entity';
import { DialogMessageEntity } from '../../models/dialog-message-entity';

@Directive()
export abstract class NgSingleViewModelService<TModel extends NgBaseEntity>
  implements OnInit, AfterViewInit, OnDestroy
{
  model?: TModel | undefined;
  isNew: boolean | undefined;
  label: string | undefined;
  message: Message | undefined;
  isBusy: boolean = false;
  headerActions: NgHeaderAction[] = [];
  toggleModelPre: boolean = false;
  backUrl: string | undefined;
  dialogMessageContent: DialogMessageEntity = {
    display: false,
    title: 'Message',
    content: '',
  };

  abstract getById(id: string): Observable<TModel>;

  protected route: ActivatedRoute;
  protected router: Router;

  protected abstract resetCb: (item: TModel) => Observable<TModel>;
  protected abstract postCb: (item: TModel) => Observable<TModel>;
  protected abstract putCb: (id: string, item: TModel) => Observable<TModel>;

  constructor(public injector: Injector) {
    this.route = injector.get<ActivatedRoute>(ActivatedRoute);
    this.router = injector.get<Router>(Router);
  }

  ngOnInit(): void {
    this.backUrl = decodeURIComponent(this.route.snapshot.queryParams['backUrl']);
    this.headerActions.push(
      {
        id: 'back',
        icon: 'pi pi-arrow-circle-left',
        iconPosition: 'left',
        label: 'Back',
        ngClass: 'p-button-raised p-button-sm p-button-warning',
        visible: true,
        command: () => this.router.navigate([this.backUrl])
      },
      {
        id: 'new',
        icon: 'pi pi-plus',
        iconPosition: 'left',
        label: 'New',
        ngClass: 'p-button-raised p-button-sm p-button-success',
        visible: true,
        command: () => this.performReset()
      },
      {
        id: 'save',
        icon: 'pi pi-save',
        iconPosition: 'left',
        label: 'Save',
        ngClass: 'p-button-raised p-button-sm p-button-success',
        visible: true,
        command: () => this.performSave()
      },
      {
        id: 'refresh',
        icon: 'pi pi-refresh',
        iconPosition: 'left',
        label: 'Refresh',
        ngClass: 'p-button-raised p-button-sm p-button-info',
        visible: true,
        command: () => this.getModel(),
      },
      {
        id: 'model',
        icon: 'pi pi-id-card',
        iconPosition: 'left',
        label: 'Model',
        ngClass: 'p-button-raised p-button-sm p-button-danger',
        visible: true,
        command: () => (this.toggleModelPre = !this.toggleModelPre),
      }
    );

    // get the model
    this.getModel();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  private getModel(): void {
    this.isBusy = true;
    this.route.params.pipe(
      switchMap(({ id }) => this.getById(id))).subscribe({
      next: (data: TModel) => {
        console.log(data);
        this.isBusy = false;
        this.model = data;
      },
      error: (err) => {
        this.isBusy = false;
        this.userMessage('error', err.name, err.message);
        throw err;
      },
      complete: () => (this.isBusy = false),
    });
  }

  private performReset(): void {
    console.log('performReset');
    of(null).pipe(
      switchMap(() => this.resetCb(this.model!))
    ).subscribe({
      next: (data: TModel) => this.model = data
    })
  }

  private performSave(): void {
    if(this.model?.id === '0') {
      this.postCb(this.model).subscribe({
        next: () => this.handleSuccessInsert(),
        error: (err) => console.log(err)
      })
    } else {
      this.putCb(this.model?.id!, this.model!).subscribe({
        next: () => this.handleSuccessUpdate(),
        error: (err) => console.log(err)
      })
    }
  }

  private handleSuccessInsert(): void {
    this.dialogMessageContent = {
      display: true,
      title: 'Success',
      content: 'Successfully inserted.'
    };
  }

  private handleSuccessUpdate(): void {
    this.dialogMessageContent = {
      display: true,
      title: 'Success',
      content: 'Successfully updated.'
    };
  }

  private userMessage(severity: string, summary: string, detail: string): void {
    this.message = {
      severity,
      summary,
      detail,
    };
  }
}
