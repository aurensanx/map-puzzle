import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MapService} from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {

  map: any;

  constructor(private route: ActivatedRoute, public mapService: MapService, private httpClient: HttpClient) {
  }

  ngOnInit() {

    this.mapService.initScore();

    this.route.paramMap.subscribe(({params}: any) => {
      this.httpClient.get(`./assets/maps/${params.id}.json`).subscribe((data: any) => {
        this.mapService.draw('#rootSVG', data);
      });

    });
  }

}
