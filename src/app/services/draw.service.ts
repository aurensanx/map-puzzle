import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {AreaService} from './area.service';
import {AreaModel} from '../components/map/model';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor(private areaService: AreaService) {
  }

  draw = id => {
    // const svg = d3.select(id);
    // svg.on("click", function () {
    //   const mouse = d3.mouse(this);
    //   console.log(mouse);
    // });
    const d3Data: any = d3.select(id).selectAll('path')
      .attr("idAlberto", 'a');
    // d3Data._groups[0] = Array.from(d3Data._groups[0]);
    // console.log(d3Data);
    d3Data.on('click', d => {
      console.log(d);
    });
  }

  drawJSON = (id, dataPath: AreaModel[]) => {

    const d3Data = d3.select(id).selectAll('.land')
      .data(dataPath).enter().append('path')
      .attr('class', 'land')
      .attr('d', d => d.d)
      .attr('id', d => d.id);

    console.log(d3Data);

    d3Data.on('click', this.onClick);
  }

  onClick = (d: AreaModel) => {
    const clickedArea = d3.select(`path#${d.id}`);
    if (this.areaService.currentMapArea.id === d.id) {
      clickedArea.style('fill', 'green');
      this.areaService.removeClickedArea(d);
    } else {
      clickedArea.style('fill', 'red');
      clickedArea.transition().delay(1000).transition().style('fill', 'white');
    }
    this.areaService.getRandomArea();
  }

}
