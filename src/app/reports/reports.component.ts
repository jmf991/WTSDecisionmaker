import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from "../shared/component/dialog/dialog.component";
import { SearchDialogComponent } from "../shared/component/dialog/dialog.component";
import { FilterDialogComponent } from "../shared/component/dialog/dialog.component";
import { SortDialogComponent } from "../shared/component/dialog/dialog.component";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})

export class ReportsComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSortDialog(): void {
    const dialogRef = this.dialog.open(SortDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async ngOnInit() {
  }

}
