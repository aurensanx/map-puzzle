import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {Feature} from "geojson";

@Injectable({
  providedIn: 'root'
})
export class GeoAreaService {

  features: Feature[];
  currentFeature: Feature;

  constructor() { }

  initMap: (features: Feature[]) => void = features => {
    this.features = features;
    this.getRandomFeature();
  }

  getRandomFeature: () => void = () => {
    this.currentFeature = this.features[Math.floor(Math.random() * (this.features.length))];
  }

  removeClickedArea: (d: Feature) => void = d => {
    _.remove(this.features, a => a.properties.provincia === d.properties.provincia);
  }

}
