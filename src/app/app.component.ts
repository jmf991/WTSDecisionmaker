import { Component } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[CdkColumnDef]
})
export class AppComponent {
  title = 'WTS-decisionmaker';
}
