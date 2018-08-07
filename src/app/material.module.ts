import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatProgressBarModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
