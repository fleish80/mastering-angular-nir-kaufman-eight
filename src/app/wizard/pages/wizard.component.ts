import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor(public wizardServive: WizardService) { }

  ngOnInit(): void {
  }

}
