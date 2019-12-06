import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MomentModule} from 'ngx-moment';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from "./components/map/map.component";
import {MapRightBarComponent} from './components/map/map-right-bar/map-right-bar.component';
import {MapLeftBarComponent} from './components/map/map-left-bar/map-left-bar.component';


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
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 59
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
