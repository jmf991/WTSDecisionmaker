import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";

@Component({
  selector: "app-decision-details",
  templateUrl: "./decision-details.component.html",
  styleUrls: ["./decision-details.component.scss"]
})

export class DecisionDetailsComponent implements OnInit {

  constructor() { }

  showEditDocsList: boolean;
  async ngOnInit() {
  }

  displayEditDocsList() {
    this.showEditDocsList = !this.showEditDocsList;
  }

}
