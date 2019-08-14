import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import map from './maps/usa.json';
import {JSONMap} from './map/map';
import {AreaService} from './area.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'spain';
  currentArea: JSONMap;
  map = map;

  constructor(private areaService: AreaService) {

  }

  ngOnInit() {
    this.currentArea = this.areaService.initMap(map);
  }
}
