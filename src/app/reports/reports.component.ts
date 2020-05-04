import { Component, OnInit, ViewChild } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { ListActionsComponent } from '../list-actions/list-actions.component';
import { DeleteDialogComponent } from "../shared/component/dialog/dialog.component";
import { AnonymizeDialogComponent } from "../shared/component/dialog/dialog.component";

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
  @ViewChild('myaccordionActions') myActionsPanels: MatAccordion;

  async ngOnInit() {
    this.listActions.showUploadInput = false;
  }

  onClickedOutsideActionsAccordion(e: Event) {
    this.myActionsPanels.closeAll();
  }

  setCurrent(index: any) {
    //this.step = index;
    console.log(index);
    //@ViewChild('index') myActionsPanels: MatAccordion;
    //this.myActionsPanels.closeAll();
  }

  /*Delete dialog*/
  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*Delete dialog*/
  openAnonymizeDialog(): void {
    const dialogRef = this.dialog.open(AnonymizeDialogComponent, {
      width: '500px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
