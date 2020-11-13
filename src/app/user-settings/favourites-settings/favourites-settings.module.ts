
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavouritesSettingsRoutingModule } from './favourites-settings-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DecisionsComponent } from '../../decisions/decisions.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    FavouritesSettingsRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  providers: [MatSnackBarModule, MatSnackBar]
})
export class FavouritesSettingsModule { }
