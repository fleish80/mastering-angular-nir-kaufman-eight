import {Injectable} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {WizardValidators} from './wizard-validators';

@Injectable()
export class WizardService {
  readonly wizardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.wizardForm = formBuilder.group({
      yearOfBirth: [null],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      agree: [true]
    });
    this.registerUserNameUniquenessValidator();
  }

  registerUserNameUniquenessValidator() {
    const emailControl = this.getControl('email');
    this.getControl('yearOfBirth').valueChanges
      .subscribe((year: number) => {
        if (year > 1982) {
          emailControl.setValidators(WizardValidators.unique([year.toString()]));
        } else {
          emailControl.clearValidators();
        }
      });
  }

  getControl(controlName: string): FormControl {
    return this.wizardForm.get(controlName) as FormControl;
  }

  handleSubmit() {
    console.log(this.wizardForm.value);
  }
}
