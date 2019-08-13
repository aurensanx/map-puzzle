import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DrawService} from '../../services/draw.service';
import spainMap from '../spain.json';
import {JSONMap} from '../map';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.scss'],
  // FIXME
  encapsulation: ViewEncapsulation.None
})
export class SpainComponent implements OnInit {
  dataFromJSON: JSONMap[];

  constructor(private drawService: DrawService) {
    this.dataFromJSON = spainMap;
  }

  ngOnInit() {
    this.drawService.getProvinces().draw('#provinces', spainMap);
  }

}
