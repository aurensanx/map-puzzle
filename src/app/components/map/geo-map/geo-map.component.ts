import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {GeoAreaService} from "../../../services/geo-area.service";

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss'],
})
export class GeoMapComponent implements OnInit, OnChanges {

  @Input() public map: any;

  constructor(private areaService: GeoAreaService) {
  }

  ngOnInit() {
  }

  ngOnChanges({map}: any) {
    if (!map.isFirstChange()) {
      this.drawMap();
    }
  }

  drawMap() {
    const rootSVG = d3.select("#rootSVG");

    const width: number = parseInt(rootSVG.style("width"), 10);
    const height: number = parseInt(rootSVG.style("height"), 10);

    const center = d3.geoCentroid(this.map);

    let scale = 550;
    let offset: [number, number] = [width / 2, height / 2];

    let projection = d3.geoMercator().scale(scale).center(center).translate(offset);

    let geoGenerator = d3.geoPath().projection(projection);

    const bounds = geoGenerator.bounds(this.map);
    const hscale = scale * width / (bounds[1][0] - bounds[0][0]);
    const vscale = scale * height / (bounds[1][1] - bounds[0][1]);
    scale = (hscale < vscale) ? hscale : vscale;
    offset = [width - (bounds[0][0] + bounds[1][0]) / 2, height - (bounds[0][1] + bounds[1][1]) / 2];

    // new projection
    projection = d3.geoMercator().center(center).scale(scale).translate(offset);
    geoGenerator = geoGenerator.projection(projection);

    rootSVG.selectAll(".area").data(this.map.features).enter().append("path")
      .attr("d", geoGenerator)
      .attr("id", (d: any) => d.properties.provincia)
      .on('click', this.onClick);
  }

  onClick = d => {
    const clickedArea = d3.select(`path#${d.properties.provincia}`);
    if (this.areaService.currentFeature.properties.provincia === d.properties.provincia) {
      clickedArea.style('fill', 'orange');
      this.areaService.removeClickedArea(d);
    } else {
      clickedArea.style('fill', 'red');
      clickedArea.transition().delay(1000).transition().style('fill', 'white');
    }
    this.areaService.getRandomFeature();
  };
}



