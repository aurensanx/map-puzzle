import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {AreaModel} from '../components/map/model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  map: AreaModel[];
  currentMapArea: AreaModel;

  initMap: (map: AreaModel[]) => void = map => {
    this.map = map;
    this.getRandomArea();
  }

  getRandomArea: () => void = () => {
    this.currentMapArea = this.map[Math.floor(Math.random() * (this.map.length))];
  }

  removeClickedArea: (d: AreaModel) => void = d => {
    _.remove(this.map, a => a.id === d.id);
  }


  constructor() {
  }
}
