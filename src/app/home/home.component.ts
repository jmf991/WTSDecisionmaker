import { Component, OnInit } from '@angular/core';
import { UploadDialogComponent } from '../shared/component/dialog/dialog.component';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      height: '330px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
