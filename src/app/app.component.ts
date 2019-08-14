import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import map from './maps/usa_test.json';
import {AreaService} from './area.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'spain';
  map = map;

  constructor(private areaService: AreaService) {

  }

  ngOnInit() {
    this.areaService.initMap(map);
  }
}
