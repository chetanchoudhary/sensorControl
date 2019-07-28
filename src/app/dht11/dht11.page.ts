import { Component, OnInit } from '@angular/core';
import { Dht11Service } from './dht11.service';

@Component({
  selector: 'app-dht11',
  templateUrl: './dht11.page.html',
  styleUrls: ['./dht11.page.scss'],
})
export class Dht11Page implements OnInit {
  temperature: number;
  humidity: number;
  constructor(private dht11Service: Dht11Service) { }

  ngOnInit() {
    this.temperature = this.dht11Service.getTemperture();
    this.humidity = this.dht11Service.getHumidity();
  }

}
