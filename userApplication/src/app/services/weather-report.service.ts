import { Injectable } from '@angular/core';
import { WeatherInfo } from '../weather-report/weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {

  constructor() { }

  weatherForecast:WeatherInfo[] = [];
  isFilled = false;

  setWeatherForecast(forecast:WeatherInfo[]){
    this.weatherForecast = forecast;
    this.isFilled = true;
  }

  getWeatherForecast(){
    return this.weatherForecast;
  }

  haveForecast(){
    return this.isFilled;
  }

  getLocationService():Promise<any> {
    return new Promise((res, err) =>{
      navigator.geolocation.getCurrentPosition(resposne=> {
        res({long: resposne.coords.longitude, lat: resposne.coords.latitude})
      })
    });
  }
}
