import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

/*Upload dialog*/
@Component({
  selector: 'dialog-upload',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class UploadDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
}

/*Search dialog*/
@Component({
  selector: 'dialog-search',
  templateUrl: 'dialog-search.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class SearchDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*Filter dialog*/
@Component({
  selector: 'dialog-filter',
  templateUrl: 'dialog-filter.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class FilterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*Sort dialog*/
@Component({
  selector: 'dialog-sort',
  templateUrl: 'dialog-sort.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class SortDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SortDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*Delete dialog*/
@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

/*Edit dialog*/
@Component({
  selector: 'dialog-edit',
  templateUrl: 'dialog-edit.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class EditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*Copy dialog*/
@Component({
  selector: 'dialog-copy',
  templateUrl: 'dialog-copy.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class CopyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CopyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
