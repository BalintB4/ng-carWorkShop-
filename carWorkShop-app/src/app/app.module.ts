import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    MechanicListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
