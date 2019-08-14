import {Injectable} from '@angular/core';
import {JSONMap} from './map/map';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  map: JSONMap[];
  currentMapArea: JSONMap;

  initMap: (map: JSONMap[]) => void = map => {
    this.map = map;
    this.getRandomArea();
  }

  getRandomArea: () => void = () => {
    this.currentMapArea = this.map[Math.floor(Math.random() * (this.map.length - 1))];
  }

  removeClickedArea: (d: JSONMap) => void = d => {
    _.remove(this.map, a => a.id === d.id);
  }


  constructor() {
  }
}
