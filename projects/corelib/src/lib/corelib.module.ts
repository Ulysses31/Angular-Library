import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgInputTextComponent } from './controls/ng-input-text/ng-input-text.component';
import { NgInputSearchComponent } from './controls/ng-input-search/ng-input-search.component';
import { NgButtonComponent } from './controls/ng-button/ng-button.component';
import { NgCalendarComponent } from './controls/ng-calendar/ng-calendar.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from 'primeng/divider';
import { AgGridModule } from 'ag-grid-angular';
import { NgCheckboxComponent } from './controls/ng-checkbox/ng-checkbox.component';
import { NgDropdownComponent } from './controls/ng-dropdown/ng-dropdown.component';
import { NgEditorComponent } from './controls/ng-editor/ng-editor.component';
import { NgInputGroupComponent } from './controls/ng-input-group/ng-input-group.component';
import { NgInputMaskComponent } from './controls/ng-input-mask/ng-input-mask.component';
import { NgInputSwitchComponent } from './controls/ng-input-switch/ng-input-switch.component';
import { NgInputTextAreaComponent } from './controls/ng-input-text-area/ng-input-text-area.component';
import { NgInputNumberComponent } from './controls/ng-input-number/ng-input-number.component';
import { NgListboxComponent } from './controls/ng-listbox/ng-listbox.component';
import { NgInputPasswordComponent } from './controls/ng-input-password/ng-input-password.component';
import { NgInputRadioComponent } from './controls/ng-input-radio/ng-input-radio.component';
import { FormsModule } from '@angular/forms';
import { NgInputSelectComponent } from './controls/ng-input-select/ng-input-select.component';
import { NgTableComponent } from './controls/ng-table/ng-table.component';
import { NgAccordionComponent } from './controls/ng-accordion/ng-accordion.component';
import { NgCardComponent } from './controls/ng-card/ng-card.component';
import { NgFieldsetComponent } from './controls/ng-fieldset/ng-fieldset.component';
import { NgPanelComponent } from './controls/ng-panel/ng-panel.component';
import { NgTabviewComponent } from './controls/ng-tabview/ng-tabview.component';
import { NgToolbarComponent } from './controls/ng-toolbar/ng-toolbar.component';
import { NgConfirmDialogComponent } from './controls/ng-confirm-dialog/ng-confirm-dialog.component';
import { NgDialogComponent } from './controls/ng-dialog/ng-dialog.component';
import { NgSidebarComponent } from './controls/ng-sidebar/ng-sidebar.component';
import { NgMenubarComponent } from './controls/ng-menubar/ng-menubar.component';
import { NgMessagesComponent } from './controls/ng-messages/ng-messages.component';
import { NgToastComponent } from './controls/ng-toast/ng-toast.component';
import { NgProgressBarComponent } from './controls/ng-progress-bar/ng-progress-bar.component';
import { NgProgressSpinnerComponent } from './controls/ng-progress-spinner/ng-progress-spinner.component';
import { NgDividerComponent } from './controls/ng-divider/ng-divider.component';
import { NgHeaderActionsComponent } from './controls/ng-header-actions/ng-header-actions.component';
import { AgPagedListComponent } from './controls/ag-paged-list/ag-paged-list.component';

@NgModule({
  declarations: [
    NgInputTextComponent,
    NgInputSearchComponent,
    NgButtonComponent,
    NgCalendarComponent,
    NgCheckboxComponent,
    NgDropdownComponent,
    NgEditorComponent,
    NgInputGroupComponent,
    NgInputMaskComponent,
    NgInputSwitchComponent,
    NgInputTextAreaComponent,
    NgInputNumberComponent,
    NgListboxComponent,
    NgInputPasswordComponent,
    NgInputRadioComponent,
    NgInputSelectComponent,
    NgTableComponent,
    NgAccordionComponent,
    NgCardComponent,
    NgFieldsetComponent,
    NgPanelComponent,
    NgTabviewComponent,
    NgToolbarComponent,
    NgConfirmDialogComponent,
    NgDialogComponent,
    NgSidebarComponent,
    NgMenubarComponent,
    NgMessagesComponent,
    NgToastComponent,
    NgProgressBarComponent,
    NgProgressSpinnerComponent,
    NgDividerComponent,
    NgHeaderActionsComponent,
    AgPagedListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    ListboxModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    TableModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TabViewModule,
    ToolbarModule,
    SplitButtonModule,
    ConfirmDialogModule,
    DialogModule,
    SidebarModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    DividerModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    NgInputTextComponent,
    NgInputSearchComponent,
    NgButtonComponent,
    NgCalendarComponent,
    NgCheckboxComponent,
    NgDropdownComponent,
    NgEditorComponent,
    NgInputGroupComponent,
    NgInputMaskComponent,
    NgInputSwitchComponent,
    NgInputTextAreaComponent,
    NgInputNumberComponent,
    NgListboxComponent,
    NgInputPasswordComponent,
    NgInputRadioComponent,
    NgInputSelectComponent,
    NgTableComponent,
    NgAccordionComponent,
    NgCardComponent,
    NgFieldsetComponent,
    NgPanelComponent,
    NgTabviewComponent,
    NgToolbarComponent,
    NgConfirmDialogComponent,
    NgDialogComponent,
    NgSidebarComponent,
    NgMenubarComponent,
    NgMessagesComponent,
    NgToastComponent,
    NgProgressBarComponent,
    NgProgressSpinnerComponent,
    NgDividerComponent,
    NgHeaderActionsComponent,
    AgPagedListComponent
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class CorelibModule {}
