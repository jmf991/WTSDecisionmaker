import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'dm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: []
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private readonly appComponent: AppComponent
  ) { }

  profileSettingsForm = this.fb.group({
    name: [''],
    role: [''],
    delegate: ['']
  });

  userName: string;
  admin: string;
  decisionOwner: string;
  modeler: string;
  techAdmin: string;
  userRole: string;

  ngOnDestroy() {
  }

  ngOnInit() {
    this.userName = "Username UserLastName";
    this.userRole = "Admin";
    this.decisionOwner = "Decision Owner";
    this.modeler = "Modeler";
    this.techAdmin = "Tech Admin";
  }

}
