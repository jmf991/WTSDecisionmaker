import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppSettingsComponent } from './app-settings.component';

const routes: Routes = [
  { path: '', component: AppSettingsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
