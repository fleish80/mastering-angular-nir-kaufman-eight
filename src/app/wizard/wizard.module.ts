import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardComponent} from './pages/wizard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UniqueDirective } from './unique.directive';

@NgModule({
  declarations: [WizardComponent, UniqueDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [WizardComponent]
})
export class WizardModule { }
