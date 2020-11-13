import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavouritesSettingsComponent } from './favourites-settings.component';

const routes: Routes = [
  { path: '', component: FavouritesSettingsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesSettingsRoutingModule { }
