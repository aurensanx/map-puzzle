import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {DrawService} from "../../../map/draw.service";
import {JSONMap} from "../../../map/map";

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgMapComponent implements OnInit, OnChanges {

  @Input() public dataPath: JSONMap[];

  constructor(private drawService: DrawService) { }

  ngOnInit() {
  }

  ngOnChanges({dataPath}: any) {
    if (!dataPath.isFirstChange()) {
      this.drawService.getDrawData().draw('#rootSVG', this.dataPath);
    }
  }

}
