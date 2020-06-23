import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardComponent} from './pages/wizard.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [WizardComponent]
})
export class WizardModule { }
