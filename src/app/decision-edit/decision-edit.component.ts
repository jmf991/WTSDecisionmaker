import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";

@Component({
  selector: "app-decision-edit",
  templateUrl: "./decision-edit.component.html",
  styleUrls: ["./decision-edit.component.scss"]
})

export class DecisionEditComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }

}
