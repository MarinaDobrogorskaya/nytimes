import { NgModule } from '@angular/core';
import {MatButtonModule, MatSelectModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
