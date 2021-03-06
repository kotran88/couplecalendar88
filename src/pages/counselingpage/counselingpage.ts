import { Component } from '@angular/core';
import { IonicPage,AlertController,MenuController, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
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

  firedata = firebase.database().ref('/accounts');
  name:any;
  tel:any;
  type:any;
  content:any;
  
  userId="kim22@naver*com";
  constructor(public alertCtrl:AlertController,public menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {

    if(this.navParams.get("flag")=="transit"){
      this.menu.close();
    }

  }

  confirm(){


    console.log(this.name)
    console.log(this.tel);
    console.log(this.type);
    console.log(this.content);

    var alert = this.alertCtrl.create({
      title: '심리상담 신청을 완료하시겠습니까?',
      buttons: [
        {
          text: '아니요',
          handler: data => {

          }
        },
        {
          text: '예',
          handler: data => {
            this.firedata.child(this.userId).child("counseling").push({"name":this.name,"tel":this.tel,"type":this.type,"content":this.content})
          }
        }
      ]
    });
    alert.present();

  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CounselingpagePage');
  }

}
