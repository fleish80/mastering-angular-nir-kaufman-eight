import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  providers: [WizardService]
})
export class WizardComponent implements OnInit {

  constructor(public wizardService: WizardService) { }

  ngOnInit(): void {
  }

  get children() {
    const childArray = this.wizardService.getControl('childrenAge') as FormArray;
    return childArray.controls;
  }

  getValidationCssClass(controlName: string) {
    const formControl = this.wizardService.getControl(controlName);
    return {
      'is-valid': formControl?.touched && formControl?.valid,
      'is-invalid': formControl?.touched && formControl?.invalid
    };
  }

  addChild() {
    const childArray = this.wizardService.getControl('childrenAge') as FormArray;
    childArray.push(new FormControl());
  }
}
