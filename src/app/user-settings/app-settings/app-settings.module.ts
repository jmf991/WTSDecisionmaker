
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppSettingsRoutingModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class AppSettingsModule { }

export function HttpLoaderFactory(http: HttpClient) {
}

export function getLanguageLocale(): string {
  const localeLang = navigator.language.substring(0, 2);
  console.log(`Locale browser lang is ${localeLang}`);
  return 'en';
}
