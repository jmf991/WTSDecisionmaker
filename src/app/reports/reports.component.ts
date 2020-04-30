import { Component, OnInit, ViewChild } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { ListActionsComponent } from '../list-actions/list-actions.component';

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})

export class ReportsComponent implements OnInit {

  constructor(public dialog: MatDialog, public listActions: ListActionsComponent) { }

  @ViewChild('myaccordion') myPanels: MatAccordion;
  @ViewChild('myaccordionTablet') myPanelsTablet: MatAccordion;
  @ViewChild('myaccordionTabletFilter') myPanelsTabletFilter: MatAccordion;

  async ngOnInit() {
    this.listActions.showUploadInput = false;
  }

  onClickedOutsideAccordion(e: Event) {
    this.myPanels.closeAll();
  }
  onClickedOutsideAccordionTablet(e: Event) {
    this.myPanelsTablet.closeAll();
    this.myPanelsTabletFilter.closeAll();
  }
  onClickedOutsideAccordionTabletFilter(e: Event) {
  }

}
