// import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import * as d3 from 'd3';
// import * as topojson from "topojson-client";
// import map from '../maps/gz_2010_us_040_00_20m.json';
//
// @Component({
//   selector: 'app-geo-map',
//   templateUrl: './geo-map.component.html',
//   styleUrls: ['./geo-map.component.scss'],
//   // FIXME
//   encapsulation: ViewEncapsulation.None
// })
// export class GeoMapComponent implements OnInit {
//
//   constructor() {
//   }
//
//   ngOnInit() {
//
//     // const path = d3.geoPath();
//
//     const projection = d3.geoEquirectangular();
//
//     const geoGenerator = d3.geoPath()
//       .projection(projection);
//
// // Join the FeatureCollection's features array to path elements
//     const u = d3.select('#rootSVG')
//       .selectAll('path')
//       .data(map.features)
//       .enter()
//       .append('path')
//       .attr('class', 'area')
//       .attr('d', geoGenerator);
//
// // Create path elements and update the d attribute using the geo generator
//     u;
//
//
//     // d3.select("#rootSVG").append("path")
//     //   .data(map.features)
//     //   .attr("fill", "none")
//     //   .attr("stroke", "red")
//     //   // .attr("stroke-linejoin", "round")
//     //   .attr("d", path);
//   }
//
// }
