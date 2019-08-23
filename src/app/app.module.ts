import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {AreaService} from './area.service';
// import { GeoMapComponent } from './geo-map/geo-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    // GeoMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
