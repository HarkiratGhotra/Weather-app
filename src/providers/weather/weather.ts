import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// map operators, so we can use observable and we can use map
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
	apikey = 'c6888a25dd9c3889';
	url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url ='http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getweather(city, state){
  	return this.http.get(this.url+'/'+state+'/'+city+'.json')
  	.map(res => res.json());
  }

}
