import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	weather:any;
	location:{
		city:string;
		state:string;
	}
  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  // when ever the component loaded, this will load
  ionViewWillEnter(){
  	this.location = {
  		city: 'Miami',
  		state: 'FL'
  	}
  	// remember this is going to send data stream, which is observable so we need to use subscribe
  	this.weatherProvider.getweather(this.location.city,this.location.state).subscribe(weather => {
  		console.log(weather);
  		this.weather = weather.current_observation;
  	})
  }

}
