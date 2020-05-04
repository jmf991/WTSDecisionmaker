import { Component, OnInit, ViewChild } from "@angular/core";
import { } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from "../shared/component/dialog/dialog.component";
import { MatAccordion } from '@angular/material/expansion';
import { ListActionsComponent } from '../list-actions/list-actions.component';


@Component({
  selector: "app-decisions",
  templateUrl: "./decisions.component.html",
  styleUrls: ["./decisions.component.scss"]
})

export class DecisionsComponent implements OnInit {

  constructor(public dialog: MatDialog, public listActions: ListActionsComponent) { }

  @ViewChild('myaccordion') myPanels: MatAccordion;
  @ViewChild('myaccordionTablet') myPanelsTablet: MatAccordion;
  @ViewChild('myaccordionTabletFilter') myPanelsTabletFilter: MatAccordion;

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async ngOnInit() {
    this.listActions.showUploadInput = true;
  }

}
