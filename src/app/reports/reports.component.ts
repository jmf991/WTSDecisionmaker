import { Component, OnInit, ViewChild } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})

export class ReportsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @ViewChild('myaccordion') myPanels: MatAccordion;
  @ViewChild('myaccordionTablet') myPanelsTablet: MatAccordion;
  @ViewChild('myaccordionTabletFilter') myPanelsTabletFilter: MatAccordion;

  async ngOnInit() {
  }

  onClickedOutsideAccordion(e: Event) {
    this.myPanels.closeAll();
  }
  onClickedOutsideAccordionTablet(e: Event) {
    this.myPanelsTablet.closeAll();
    this.myPanelsTabletFilter.closeAll();
  }
  onClickedOutsideAccordionTabletFilter(e: Event) {
    //this.myPanelsTabletFilter.closeAll();
  }

}
