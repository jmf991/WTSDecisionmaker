import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from "../shared/component/dialog/dialog.component";
import { EditDialogComponent } from "../shared/component/dialog/dialog.component";
import { CopyDialogComponent } from "../shared/component/dialog/dialog.component";

export interface TableElement {
  position: number;
  name: string;
  date: string;
  delete: boolean;
  edit: boolean;
  copy: boolean;
}

const ELEMENT_DATA: TableElement[] = [
  {
    position: 1,
    name: 'Document 1 (2020-03-23)',
    date: '2020-03-23',
    delete: true,
    edit: true,
    copy: true
  }, {
    position: 2,
    name: 'Document 2 (2020-03-23)',
    date: '2020-03-23',
    delete: true,
    edit: true,
    copy: true
  }, {
    position: 3,
    name: 'Document 3 (2020-03-23)',
    date: '2020-03-23',
    delete: true,
    edit: true,
    copy: true
  }, {
    position: 4,
    name: 'Document 4 (2020-03-23)',
    date: '2020-03-23',
    delete: true,
    edit: true,
    copy: true
  }
];

@Component({
  selector: "app-decision-edit",
  templateUrl: "./decision-edit.component.html",
  styleUrls: ["./decision-edit.component.scss"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DecisionEditComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name'];
  expandedElement: TableElement | null;


  constructor(public dialog: MatDialog) { }

  async ngOnInit() {
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
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
  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      height: '240px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*Copy dialog*/
  openCopyDialog(): void {
    const dialogRef = this.dialog.open(CopyDialogComponent, {
      width: '500px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
