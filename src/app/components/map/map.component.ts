import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DrawService} from '../../services/draw.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {

  map: any;

  constructor(private route: ActivatedRoute, private drawService: DrawService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(({params}: any) => {
      // this.map = params.id;
      // setTimeout(() => {
      //   this.drawService.draw('#rootSVG');
      // }, 1000);

      this.httpClient.get(`assets/maps/${params.id}.json`).subscribe((data: any) => {
        this.drawService.drawJSON('#rootSVG', data);
      });

    });
  }

}
