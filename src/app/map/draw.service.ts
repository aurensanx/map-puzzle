import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {JSONMap} from './map';
import {AreaService} from '../area.service';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  private readonly drawData;
  private readonly onClick;

  getDrawData() {
    return this.drawData;
  }

  constructor(private areaService: AreaService) {

    this.onClick = d => {
      const clickedArea = d3.select(`path#${d.id}`);
      if (areaService.currentMapArea.id === d.id) {
        clickedArea.style('fill', 'green');
      } else {
        clickedArea.style('fill', 'red');
        clickedArea.transition().delay(1000).transition().style('fill', 'white');
      }
      areaService.getRandomArea();
    };

    this.drawData = {

      draw: (id, dataPath: JSONMap[]) => {

        d3.select(id).selectAll('.area')
          .data(dataPath).enter().append('path')
          .attr('class', 'area')
          .attr('d', d => d.d)
          .attr('id', d => d.id)
          .on('click', this.onClick);
      }
    };
  }

}
