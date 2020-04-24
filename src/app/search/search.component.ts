import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})

export class SearchComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  // openUploadDialog(): void {
  //   const dialogRef = this.dialog.open(UploadDialogComponent, {
  //     width: '500px',
  //     height: '330px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // openSearchDialog(): void {
  //   const dialogRef = this.dialog.open(SearchDialogComponent, {
  //     width: '500px',
  //     height: '330px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // openFilterDialog(): void {
  //   const dialogRef = this.dialog.open(FilterDialogComponent, {
  //     width: '500px',
  //     height: '330px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // openSortDialog(): void {
  //   const dialogRef = this.dialog.open(SortDialogComponent, {
  //     width: '500px',
  //     height: '330px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  async ngOnInit() {
  }

}
