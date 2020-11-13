import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from "rxjs";
import { switchMap, map } from 'rxjs/operators';
import { DecisionsComponent } from '../../decisions/decisions.component';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {
//   CopyDialogComponent, DeleteDMNDialogComponent
// } from '../../shared/component/dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
//import { ListActionsModel } from '../../shared/model/list-actions.model';

@Component({
  selector: 'dm-favourites-settings',
  templateUrl: './favourites-settings.component.html',
  styleUrls: ['./favourites-settings.component.scss'],
  providers: [MatSnackBar, DecisionsComponent]
})
export class FavouritesSettingsComponent implements OnInit {

  favouritesSettingsForm = this.fb.group({
    appTheme: [''],
    appLanguage: [''],
    appMode: ['']
  });
  starredDecisions: Array<any>;
  userPermissions: Permissions;
  userId: number;

  private readonly subscription = new Subscription();
  constructor(
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getStarredDecisionsForUserId();
  }

  /*Copy dialog*/
  openCopyDialog(evaluationURL: string): void {
    // const dialogRef = this.dialog.open(CopyDialogComponent, {
    //   width: '500px',
    //   height: '200px',
    //   data: evaluationURL
    // });
    // let currentURL = window.location.href;
    // let baseURL = currentURL.split("/decisions")[0];
    // let UrlToCopy = baseURL + evaluationURL;

    // this.decisionService.copyToClipboard(UrlToCopy);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  /*Delete dialog*/
  deleteDMNtemplate(decisionId: string) {
    // if (decisionId != "") {
    //   const dialogRef = this.dialog.open(DeleteDMNDialogComponent, {
    //     width: '500px',
    //     height: '200px',
    //     data: decisionId
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     this.getStarredDecisionsForUserId();
    //   });
    // }
  }

  getStarredDecisionsForUserId() {
        this.starredDecisions = [{"id":"a3a9264e-24ee-11eb-9bb3-524de3cb5e79","version":49,"key":"id-5e85bfa1939055cc4787c32420f0a0ef","name":"3-Monatsregel","status":{"statusCode":{"name":"DRAFT","priority":0},"languageCode":"en","name":"DRAFT","description":"INITIAL STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"49.0.0","law":null,"dateUploaded":"2020-11-12T13:54:53.281","isArchive":false},{"id":"f4c90ef1-24c0-11eb-9bb3-524de3cb5e79","version":11,"key":"id-3bc404f1834c36867e85bb7572222555","name":"test 5","status":{"statusCode":{"name":"DRAFT","priority":0},"languageCode":"en","name":"DRAFT","description":"INITIAL STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"11.0.0","law":null,"dateUploaded":"2020-11-12T08:27:53.803","isArchive":false},{"id":"932a4348-182c-11eb-aef5-221bfa21d962","version":10,"key":"id-33316e033612a040860de2cf74d3930a","name":"Bewirtung","status":{"statusCode":{"name":"RELEASE","priority":2},"languageCode":"en","name":"RELEASE","description":"RELEASE STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"10.0.0","law":null,"dateUploaded":"2020-10-27T08:15:30.179","isArchive":false},{"id":"9317cca2-182c-11eb-aef5-221bfa21d962","version":25,"key":"id-37388c764ad1e1ff140be80dbc1fe48b","name":"Amtsträger","status":{"statusCode":{"name":"DRAFT","priority":0},"languageCode":"en","name":"DRAFT","description":"INITIAL STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"25.0.0","law":null,"dateUploaded":"2020-10-27T08:15:29.902","isArchive":false},{"id":"4f0eeafb-182b-11eb-aef5-221bfa21d962","version":7,"key":"id-3bc404f1834c36867e85bb7572cb7da7","name":"TT-Aufsichtsratvergütung","status":{"statusCode":{"name":"RELEASE","priority":2},"languageCode":"en","name":"RELEASE","description":"RELEASE STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"7.0.0","law":null,"dateUploaded":"2020-10-27T08:06:26.448","isArchive":false},{"id":"d6be5d47-06d6-11eb-9f21-6eff204db830","version":19,"key":"id-c348ba29519c7fce761fbe5666dbe856","name":"Bewirtung","status":{"statusCode":{"name":"RELEASE","priority":2},"languageCode":"en","name":"RELEASE","description":"RELEASE STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":"Add decription","userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"19.0.0","law":null,"dateUploaded":"2020-10-05T06:48:56.692","isArchive":false},{"id":"d6c3db8f-06d6-11eb-9f21-6eff204db830","version":32,"key":"id-db6f1b81883fb2daa4c721b229b2191b","name":"Anlass außergewöhnlicher Arbeitseinsatz","status":{"statusCode":{"name":"DRAFT","priority":0},"languageCode":"en","name":"DRAFT","description":"INITIAL STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":null,"userId":100004,"userDisplayName":"Reyes, Manuel","uploadVersion":"32.0.0","law":null,"dateUploaded":"2020-10-05T06:48:56.462","isArchive":false},{"id":"88722aee-e217-11ea-a2f8-9230a7c22478","version":7,"key":"id-6e09d53cb399495c1ae4e3c8aaf15e54","name":"Welches Getränk soll ich mir kaufen?","status":{"statusCode":{"name":"DRAFT","priority":0},"languageCode":"en","name":"DRAFT","description":"INITIAL STATUS"},"category":{"categoryCode":{"name":"VALUE_ADDED_TAX"},"languageCode":"en","name":"VALUE_ADDED_TAX","description":"Value added taxes"},"description":"Du bist mal wieder in einer Bar gelandet und weißt nicht was du dir zu trinken holen sollst? Kein Problem, anhand deiner Präferenzen sagen Wir dir was du brauchst.","userId":100012,"userDisplayName":"Del Prado, David","uploadVersion":"7.0.0","law":null,"dateUploaded":"2020-08-19T12:28:49.884","isArchive":false}];
  }

  removeAsFavourite(decisionId: string) {
    // if (this.userId == undefined) {
    //   this.userService.getUser().subscribe((response) => {
    //     this.user = response;
    //     this.userId = this.user.id;
    //     this.removeDecisionModelAsStarredByUser(decisionId);
    //   },
    //     (error) => {
    //       console.log(error);
    //       this.translate.get("snackbarMessage.errorFavouriteDecisionRemove").subscribe(snackBarMessage =>
    //         this.snackBar.open(snackBarMessage, "OK", { duration: 2000, panelClass: ['error-snackbar'] }));
    //     });
    // }
    // else {
    //   this.removeDecisionModelAsStarredByUser(decisionId);
    // }
  }

  removeDecisionModelAsStarredByUser(decisionId: string) {
    // this.decisionService.removeDecisionModelAsStarredByUser(decisionId, this.userId.toString()).subscribe((response) => {
    //   this.translate.get("snackbarMessage.favouriteDecisionRemove").subscribe(snackBarMessage =>
    //     this.snackBar.open(snackBarMessage, "OK", { duration: 2000, panelClass: ['success-snackbar'] }));
    //   this.getStarredDecisionsForUserId();
    // },
    //   (error) => {
    //     console.log(error);
    //     this.translate.get("snackbarMessage.errorFavouriteDecisionRemove").subscribe(snackBarMessage =>
    //       this.snackBar.open(snackBarMessage, "OK", { duration: 2000, panelClass: ['error-snackbar'] }));
    //   });
  }

}
