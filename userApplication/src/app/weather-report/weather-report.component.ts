import { Component, OnInit } from '@angular/core';
import { WeatherReportService } from '../services/weather-report.service';
import { WeatherInfo } from './weatherInfo';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  
  weatherInfo: any = [];
  constructor(private weatherService: WeatherReportService) { }

  key: string = "&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
  weatherForecast:WeatherInfo[] = [];
  testWeather!:WeatherInfo;

  ngOnInit(): void {
    //TODO USE REDIS CALLING THIS APU TAKES FOREVER NEED TO CACHE THIS. 
    if(this.weatherService.isFilled == false){
      this.setWeatherBasedOnLocation();
    } else {
      this.weatherForecast = this.weatherService.getWeatherForecast();
    }

  }

  convertToFahrenheit(kelvin: number){
    return Math.round((kelvin - 273.15) * (9.0/5.0) + 32);
  }

  getDescriptionSimplified(description: string){
    if(description.search("cloud") != -1 || description.search("clouds") != -1  ){
      return "clouds";
    } 
    else if(description.search("rain") != -1){
      return "rain";
    }
    else return "";


  }

  setFiveDayForecast(data: any){
    for(let i = 3; i < data['list'].length; i= i+8){
      let weatherTemplate = {    
        temp: this.convertToFahrenheit(data['list'][i].main.temp),
        city: data['city'].name,
        description: data['list'][i].weather[0].description,
        feelsLike: this.convertToFahrenheit(data['list'][i].main.feels_like),
        humidity: data['list'][i].main.humidity,
        date: data['list'][i].dt_txt,
        outdoorWeather: this.getDescriptionSimplified(data['list'][i].weather[0].description)
        }
      this.weatherForecast.push(weatherTemplate);
    }
    
  }


  setWeatherBasedOnLocation(){
    //TODO need to get current weather, not just forecast. 
    this.weatherService.getLocationService().then(response=>{
      let weatherAPIURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+ Math.round(response.lat) + "&lon=" + Math.round(response.long) + this.key;
      fetch(weatherAPIURL).then( response => response.json()).then(data =>{
        this.setFiveDayForecast(data);
        //send to weatherService to hold data. would use redis if possible.
        this.weatherService.setWeatherForecast(this.weatherForecast);
      }) 
    })
  }

}
