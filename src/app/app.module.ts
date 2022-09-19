import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTableModule} from '@angular/material/table'
import {HttpClientModule } from '@angular/common/http'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';

import { MatSortModule } from '@angular/material/sort';
import { ObrazovanjeComponent } from './components/obrazovanje/obrazovanje.component';
import { ObrazovanjeDialogComponent } from './components/dialogs/obrazovanje-dialog/obrazovanje-dialog.component';
import { PreduzeceDialogComponent } from './components/dialogs/preduzece-dialog/preduzece-dialog.component';
import { PreduzeceComponent } from './components/preduzece/preduzece.component';
import { SektorComponent } from './components/sektor/sektor.component';
import { SektorDialogComponent } from './components/dialogs/sektor-dialog/sektor-dialog.component';
import { RadnikComponent } from './components/radnik/radnik.component';
import { RadnikDialogComponent } from './components/dialogs/radnik-dialog/radnik-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ObrazovanjeComponent,
    ObrazovanjeDialogComponent,
    PreduzeceDialogComponent,
    PreduzeceComponent,
    SektorComponent,
    SektorDialogComponent,
    RadnikComponent,
    RadnikDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
