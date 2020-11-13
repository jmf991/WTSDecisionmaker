import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";

@Component({
  selector: "app-report-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.scss"]
})

export class ReportDetailsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['Question', 'Answer'];
  dataSource: any;

  async ngOnInit() {
    this.dataSource = [{ "id": 0, "question": "Ist innerhalb der letzten drei  Monate bereits eine Bewirtung  an diese Personen erfolgt?", "answer": "Ja", "response": "Eine Bewirtung ist unter diesen Umständen nicht erlaubt", "date": "2020-11-11T13:21:36", "final": true }]
  }


}
