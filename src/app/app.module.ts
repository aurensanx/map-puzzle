import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AreaService} from './services/area.service';
import {GeoMapComponent} from './components/map/geo-map/geo-map.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from "./components/map/map.component";
import {HttpClientModule} from "@angular/common/http";
import { SvgMapComponent } from './components/map/svg-map/svg-map.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GeoMapComponent,
    HomeComponent,
    SvgMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AreaService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
