import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { userSettingsRoutingModule } from './user-settings-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { userSettingsComponent } from './user-settings.component';
import { ProfileComponent } from './profile-settings/profile.component';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { FavouritesSettingsComponent } from './favourites-settings/favourites-settings.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    userSettingsRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule

  ],
  declarations: [userSettingsComponent, ProfileComponent, AppSettingsComponent, FavouritesSettingsComponent],
  bootstrap: [userSettingsComponent],
  providers: [MatSnackBar]
})
export class userSettingsModule { }

export function HttpLoaderFactory(http: HttpClient) {
}

export function getLanguageLocale(): string {
  const localeLang = navigator.language.substring(0, 2);
  console.log(`Locale browser lang is ${localeLang}`);
  return 'en';
}
