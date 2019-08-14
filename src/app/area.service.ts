import {Injectable} from '@angular/core';
import {JSONMap} from './map/map';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  map: JSONMap[];
  currentMapArea: JSONMap;

  initMap: (map: JSONMap[]) => JSONMap = map => {
    this.map = map;
    return this.getRandomArea();
  }

  getRandomArea: () => JSONMap = () => {
    this.currentMapArea = this.map[Math.floor(Math.random() * (this.map.length - 1))];
    return this.currentMapArea;
  }


  constructor() {
  }
}
