import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'dm-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
  providers: []
})
export class AppSettingsComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private readonly appComponent: AppComponent
  ) { }

  appSettingsForm = this.fb.group({
    appTheme: [''],
    appLanguage: [''],
    appMode: ['']
  });

  isDarkMode = false;
  isLightMode = true;
  user: any;
  userUpdate: any;
  userPermissions: Permissions;

  ngOnDestroy() {
    this.updateUser();
  }

  ngOnInit() {
    this.getUser();
    //this.userPermissions = this.appComponent.userPermissions;
  }

  private initializeForm(user: any) {
    // if (user != undefined) {
    //   this.appSettingsForm.patchValue({
    //     appTheme: user.appTheme,
    //     appLanguage: user.appLanguage,
    //     appMode: user.appMode
    //   });
    // }
  }

  getUser() {
    // this.userService.getUser().subscribe((response) => {
    //   if (response != undefined) {
    //     this.user = response;
    //     this.user.appLanguage = response["appLanguage"] == 'ge' || response["appLanguage"] == 'de' || response["appLanguage"] == 'de-DE' ? 'ge' : 'en';
    //     this.user.appTheme = (response["appTheme"] == 'daimler-theme' || response["appTheme"] == 'daimler') ? 'daimler-theme' : 'light-theme';
    //     this.user.appMode = (response["appMode"] == 'dark' || response["appMode"] == 'dark-theme') ? 'dark-theme' : 'light-theme';
    //     this.changeMode(this.user.appMode);
    //     this.setLanguage(this.user.appLanguage);
    //     this.changeTheme(this.user.appTheme);
    //     this.initializeForm(this.user);
    //   }
    // },
    //   (error) => {
    //     console.log(error);
    //   });
  }

  updateUser() {
    // this.userUpdate = this.appSettingsForm.value
    // this.userService.updateCurrentUserSettings(this.user.id, this.userUpdate)
    //   .subscribe(
    //     (response) =>
    //       (error) => console.log(error)
    //   );
  }

  changeMode(newTheme) {
    let bodyElement = this.document.getElementById("Decision-manager-application");
    //remove all posible themes
    bodyElement.classList.remove("light-theme");
    bodyElement.classList.remove("dark-theme");
    if (!bodyElement.classList.contains(newTheme)) {
      this.isDarkMode = newTheme == "light-theme" ? false : true;
      this.isLightMode = newTheme == "light-theme" ? true : false;
      bodyElement.classList.add(newTheme);
    }
  }

  setLanguage(localeId: string) {
    // console.log(`Changing language to ${localeId}`);
    // this.translate.use(localeId);
  }

  changeTheme(newTheme) {
    let bodyElement = this.document.getElementById("Decision-manager-application");

    //remove all posible themes
    bodyElement.classList.remove("light-theme");
    bodyElement.classList.remove("daimler-theme");

    if (!bodyElement.classList.contains(newTheme)) {

      //remove all posible theme logo classes
      let logoImg = this.document.getElementById("logo-img")
      if (logoImg != undefined) {
        logoImg.classList.remove("default-logo");
        logoImg.classList.remove("daimler-logo");
      }

      let daimlerBgImg = this.document.getElementById("daimler-background")
      if (daimlerBgImg != undefined) {
        daimlerBgImg.classList.remove("hidden");
      }

      //for daimler theme replace the main logo class and source
      if (newTheme == 'daimler-theme') {
        if (daimlerBgImg != undefined) {
          daimlerBgImg.classList.remove("hidden");
        }
        if (logoImg != undefined) {
          logoImg.classList.add("daimler-logo");
          let logoImgElement = logoImg as HTMLImageElement;
          logoImgElement.src = "assets/images/logo_daimler_white.png";
        }
      }
      else {
        if (daimlerBgImg != undefined) {
          daimlerBgImg.classList.add("hidden");
        }
        //for other themes set the main logo class and source
        logoImg.classList.add("default-logo");
        let logoImgElement = logoImg as HTMLImageElement;
        logoImgElement.src = "assets/images/sapCompanyLogo.gif";
      }
      bodyElement.classList.add(newTheme);
    }
  }
}
