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
import { NgCheckboxComponent } from './controls/ng-checkbox/ng-checkbox.component';
import { NgDropdownComponent } from './controls/ng-dropdown/ng-dropdown.component';
import { NgEditorComponent } from './controls/ng-editor/ng-editor.component';
import { NgInputGroupComponent } from './controls/ng-input-group/ng-input-group.component';
import { NgInputMaskComponent } from './controls/ng-input-mask/ng-input-mask.component';
import { NgInputSwitchComponent } from './controls/ng-input-switch/ng-input-switch.component';
import { NgInputTextAreaComponent } from './controls/ng-input-text-area/ng-input-text-area.component';
import { NgInputNumberComponent } from './controls/ng-input-number/ng-input-number.component';
import { NgListboxComponent } from './controls/ng-listbox/ng-listbox.component';

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
    NgListboxComponent
  ],
  imports: [
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
    ListboxModule
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
    NgListboxComponent
  ],
})
export class CorelibModule {}
