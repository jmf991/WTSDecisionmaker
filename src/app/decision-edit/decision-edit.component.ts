import { Component, OnInit } from "@angular/core";
import {
} from "@angular/forms";
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface TableElement {
  position: number;
  name: string;
  date:Date;
}

const ELEMENT_DATA: TableElement[] = [
  {position: 1,name: 'Document 3', date:new Date('2020-03-23')},
  {position: 1,name: 'Document 3', date:new Date('2020-03-23')},
  {position: 1,name: 'Document 3', date:new Date('2020-03-23')},
  {position: 1,name: 'Document 3', date:new Date('2020-03-23')},
  {position: 1,name: 'Document 3', date:new Date('2020-03-23')},
];

@Component({
  selector: "app-decision-edit",
  templateUrl: "./decision-edit.component.html",
  styleUrls: ["./decision-edit.component.scss"]
})
export class DecisionEditComponent implements OnInit {

  displayedColumns: string[] = ['name','date'];



  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);
  selection = new SelectionModel<TableElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  constructor() { }

  async ngOnInit() {
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }

}
