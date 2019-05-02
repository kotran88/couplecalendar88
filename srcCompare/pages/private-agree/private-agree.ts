import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PrivateAgreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private-agree',
  templateUrl: 'private-agree.html',
})
export class PrivateAgreePage {


  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivateAgreePage');
  }
  confirm(){
    this.viewCtrl.dismiss();
  }
}
