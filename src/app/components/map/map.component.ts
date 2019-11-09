import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GeoJSON} from "geojson";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(({params}: any) => {
      this.httpClient.get(`assets/maps/${params.id}.json`).subscribe((data: any) => {
        this.map = data;
      });
    });
  }

}
