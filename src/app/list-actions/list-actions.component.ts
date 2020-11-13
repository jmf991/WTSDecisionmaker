import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from "../shared/component/dialog/dialog.component";
import { MatAccordion } from '@angular/material/expansion';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions.component.html',
  styleUrls: ['./list-actions.component.scss']
})

export class ListActionsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,public dialog: MatDialog) { }

  @ViewChild('myaccordion') myPanels: MatAccordion;
  @ViewChild('myaccordionTablet') myPanelsTablet: MatAccordion;
  @ViewChild('myaccordionTabletFilter') myPanelsTabletFilter: MatAccordion;
  //@Input('_showUploadInput') showUploadInput: boolean;


  actionsForm = this.fb.group({
    sortBy: [''],
    search: [''],
    filterBy: this.fb.group({
      key: [''],
      value: [''],
      alternativeValue: ['']
    })
  });
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
  }

  public _showUploadInput = null;

  @Input()
  set showUploadInput(showUploadInput: boolean) {
    this._showUploadInput = showUploadInput;
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
