import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SettingsPage} from '../settings/settings';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage} from '../main/main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  MainPage = MainPage;

  constructor(private navCtrl: NavController) {
  	//this.navCtrl.setRoot(MainPage);
  }

  logout(){
  	this.navCtrl.push(MainPage);
  }
}
