import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public googlePlus: GooglePlus,public platform:Platform) { }

  ionViewWillEnter(){
  }

  login(){
    this.googlePlus.login({})
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot(HomePage);
    })
    .catch(err => {
      console.error(err);
    });
  }
}
