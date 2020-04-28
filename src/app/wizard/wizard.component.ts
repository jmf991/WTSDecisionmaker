import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

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
  isCompleted:false;
  constructor() {}

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstCtrl: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      secondCtrl: new FormControl()
    });
  }
}
