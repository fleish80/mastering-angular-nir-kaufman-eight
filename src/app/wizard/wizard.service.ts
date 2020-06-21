import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class WizardService {
  readonly wizardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.wizardForm = formBuilder.group({
      email: [null],
      password: [null],
    });
  }

  handleSubmit() {
    console.log(this.wizardForm.value);
  }
}
