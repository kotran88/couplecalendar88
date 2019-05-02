import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CounselingpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-counselingpage',
  templateUrl: 'counselingpage.html',
})
export class CounselingpagePage {

  name:any;
  tel:any;
  type:any;
  content:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirm(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselingpagePage');
  }

}
