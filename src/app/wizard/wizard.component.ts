import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"]
})
export class WizardComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  isCompleted: false;
  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl()
    });
  }

  @ViewChild('stepper') stepper: MatStepper;
  showNextStep(index: number) {
    var stepLabel ='cdk-step-label-0-'.concat(index.toString());
    var stepHeader = this.document.getElementById(stepLabel)
    var stepElement = stepHeader.parentElement;
    stepElement.classList.add("displayed-step");
  }
}
