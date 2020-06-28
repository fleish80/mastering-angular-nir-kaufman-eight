import {Injectable} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import {WizardValidators} from './wizard-validators';
import {combineLatest} from 'rxjs';

@Injectable()
export class WizardService {
  readonly wizardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.wizardForm = formBuilder.group({
      yearOfBirth: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      agree: [true],
      childrenAge: formBuilder.array([])
    });
    this.registerUserNameUniquenessValidator();
    this.registerDisableValidator();
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

  registerDisableValidator() {
    combineLatest([
      this.getControl('email').statusChanges,
      this.getControl('yearOfBirth').statusChanges
    ]).subscribe(statuses => {
      const invalid = statuses.some(status => status === 'INVALID');
      if (invalid) {
        this.getControl('password').disable();
      } else {
        this.getControl('password').enable();
      }
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.wizardForm.get(controlName);
  }

  handleSubmit() {
    console.log(this.wizardForm.value);
  }
}
