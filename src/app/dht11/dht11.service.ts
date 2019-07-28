import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dht11Service {
  private temperature: number;
  private humidity: number;

  constructor() {
    this.temperature = 25;
    this.humidity = 50;
  }
  getTemperture() {
    return this.temperature;
  }
  getHumidity() {
    return this.humidity;
  }
}
