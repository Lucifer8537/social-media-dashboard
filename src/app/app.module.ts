import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalOverviewComponent } from './total-overview/total-overview.component';
import { DayOverviewComponent } from './day-overview/day-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalOverviewComponent,
    DayOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
