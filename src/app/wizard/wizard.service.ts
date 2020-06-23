import {Injectable} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {WizardValidators} from './wizard-validators';

@Injectable()
export class WizardService {
  readonly wizardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.wizardForm = formBuilder.group({
      username: [null],
      email: [null, [Validators.required, WizardValidators.unique(['nir'])]],
      password: [null, [Validators.required]],
      agree: [true]
    });
  }

  getControl(controlName: string): FormControl {
    return this.wizardForm.get(controlName) as FormControl;
  }

  handleSubmit() {
    console.log(this.wizardForm.value);
  }
}
