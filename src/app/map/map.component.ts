import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {JSONMap} from './map';
import {DrawService} from './draw.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  // FIXME
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  @Input() public dataPath: JSONMap[];

  constructor(private drawService: DrawService) {
  }

  ngOnInit() {
    this.drawService.getDrawData().draw('#rootSVG', this.dataPath);
  }
}
