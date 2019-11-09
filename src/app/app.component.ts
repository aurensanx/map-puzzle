import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import map from '../assets/maps/provincias-espanolas.json';
import {GeoAreaService} from "./services/geo-area.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  // title = 'spain';
  // map: any = map;

  constructor(private areaService: GeoAreaService) {
  }

  ngOnInit() {
    // this.areaService.initMap(this.map.features);
  }
}
