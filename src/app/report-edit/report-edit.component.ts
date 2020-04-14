import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from "../shared/component/dialog/dialog.component";

@Component({
  selector: "app-report-edit",
  templateUrl: "./report-edit.component.html",
  styleUrls: ["./report-edit.component.scss"]
})

export class ReportEditComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  async ngOnInit() {
  }
  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      height: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
