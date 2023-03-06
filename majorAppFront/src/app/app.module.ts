import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPlateComponent } from './search-plate/search-plate.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MapHelpComponent } from './map-help/map-help.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlateComponent,
    MapPageComponent,
    MapHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
