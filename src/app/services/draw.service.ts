import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {AreaService} from './area.service';
import {AreaModel} from '../components/map/model';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private readonly drawData;
  private readonly onClick: (d: AreaModel) => void;

  getDrawData() {
    return this.drawData;
  }

  constructor(private areaService: AreaService) {

    this.onClick = d => {
      const clickedArea = d3.select(`path#${d.id}`);
      if (areaService.currentMapArea.id === d.id) {
        clickedArea.style('fill', 'green');
        areaService.removeClickedArea(d);
      } else {
        clickedArea.style('fill', 'red');
        clickedArea.transition().delay(1000).transition().style('fill', 'white');
      }
      areaService.getRandomArea();
    };

    this.drawData = {

      draw: (id, dataPath: AreaModel[]) => {

        d3.select(id).selectAll('.land')
        // .data(dataPath).enter().append('path')
          .attr('class', 'land')
          // .attr('d', d => d.d)
          // .attr('id', d => d.id)
          .on('click', this.onClick);
      }
    };
  }

}