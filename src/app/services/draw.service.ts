import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {JSONMap} from '../maps/map';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  provinces;

  getProvinces() { return this.provinces; }

  constructor() {

    this.provinces = {
      draw: (id, provincesPath: JSONMap[]) => {
        d3.select(id).selectAll('.province')
          .data(provincesPath).enter().append('path').attr('class', 'province').attr('d', d => d.d);
        // .style('fill',function(d){ return data[d.id].color; })
        // .on('mouseover', mouseOver).on('mouseout', mouseOut);
      }
    };
  }

}
