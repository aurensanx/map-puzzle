import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from "./components/map/map.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MapRightBarComponent } from './components/map/map-right-bar/map-right-bar.component';
import { MapLeftBarComponent } from './components/map/map-left-bar/map-left-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    MapRightBarComponent,
    MapLeftBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
