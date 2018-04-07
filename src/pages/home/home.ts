import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    private storage:Storage) {

  }

  // when ever the component loaded, this will load
  ionViewWillEnter(){

    // we do not want to use staic value, we want something from api,so using storage
    this.storage.get('location').then((val) => {
      if(val !=null){
         //putting the value from jason into location 
         this.location = JSON.parse(val);
      }else {
        this.location = {
      city: 'Miami',
      state: 'FL'
    }
      }
      // remember this is going to send data stream, which is observable so we need to use subscribe
    this.weatherProvider.getweather(this.location.city,this.location.state).subscribe(weather => {
      console.log(weather);
      this.weather = weather.current_observation;
    })
    });
  }

}
