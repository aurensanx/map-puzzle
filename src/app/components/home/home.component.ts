import {Component, OnInit} from '@angular/core';

interface MenuItem {
  name: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  maps: MenuItem[] = [
    {name: 'USA', id: 'usa'},
    {name: 'Europa', id: 'europe'},
    {name: 'África', id: 'africa'},
    {name: 'Asia', id: 'asia'},
    {name: 'América', id: 'america'},
    {name: 'España', id: 'spain'},
    {name: 'Aragón', id: 'aragon'},
    {name: 'Cinco Villas', id: 'cinco-villas'},
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
