import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private googlePlus: GooglePlus) {
  }
  
  logOut(){
    this.googlePlus.logout()
    .then(res => {
      console.log(res);
      this.navCtrl.setRoot("LoginPage");
    })
    .catch(err => {
      console.error(err);
    });
  }
}
