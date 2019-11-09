import {Component, OnInit} from '@angular/core';

interface MenuItem {
  name: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  maps: MenuItem[] = [{name: 'USA', id: 'usa'}, {name: 'Spain', id: 'spain'}];

  constructor() {
  }

  ngOnInit() {
  }

}
