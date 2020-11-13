import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userSettingsComponent } from './user-settings.component';

const routes: Routes = [
  { path: '', component: userSettingsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class userSettingsRoutingModule { }
