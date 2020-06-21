import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './pages/wizard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { WizardService } from './wizard.service';

@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [WizardService],
  exports: [WizardComponent]
})
export class WizardModule { }
