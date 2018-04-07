import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ViewChild } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
	@ViewChild ('username') uname;
	@ViewChild ('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  login(){
  	if(this.uname.value=="admin" && this.password.value=="admin")
  	{
  		this.navCtrl.push(TabsPage);
  	}
  }

}
