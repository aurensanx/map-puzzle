import {Injectable} from '@angular/core';
import {AreaModel} from './model';
import * as d3 from 'd3';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  pendingAreas: AreaModel[];
  guessedAreas: string[];
  currentArea: AreaModel;

  constructor() {
  }

  draw = (id, dataPath: AreaModel[]) => {

    d3.select(id).selectAll('.map-area')
      .data(dataPath).enter().append('path')
      .attr('class', 'map-area')
      .attr('d', d => d.d)
      .attr('id', d => d.id)
      .on('click', this.onClick);

    this.pendingAreas = dataPath;
    this.guessedAreas = [];
    this.getRandomArea();
  };

  onClick = (d: AreaModel) => {
    const clickedArea = d3.select(`path#${d.id}`);
    if (_.indexOf(this.guessedAreas, d.id) === -1) {
      if (this.currentArea.id === d.id) {
        clickedArea.classed("correct", true);
        this.removeClickedArea(d);
      } else {
        // FIXME with css
        clickedArea.classed("wrong", true);
        setTimeout(() => {
          clickedArea.classed("wrong", false);
        }, 1000);
      }
      this.getRandomArea();
    }
  };

  getRandomArea: () => void = () => {
    this.currentArea = this.pendingAreas[Math.floor(Math.random() * (this.pendingAreas.length))];
  };

  removeClickedArea: (d: AreaModel) => void = d => {
    this.guessedAreas.push(_.remove(this.pendingAreas, ['id', d.id])[0].id);
  }
}
