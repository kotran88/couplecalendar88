import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the RegisterTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-type',
  templateUrl: 'register-type.html',
})
export class RegisterTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterTypePage');
  }
  kakao() {

  }
  naver() {

  }
  signup() {
    this.navCtrl.push(RegisterPage, {} , {animate:false});
  }
}
