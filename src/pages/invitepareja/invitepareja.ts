import { Component } from '@angular/core';
import { IonicPage,AlertController,MenuController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InviteparejaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invitepareja',
  templateUrl: 'invitepareja.html',
})
export class InviteparejaPage {

  constructor(public alertCtrl:AlertController,public menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get("flag")=="transit"){
      this.menu.close();
    }
  }

  confirm(){

    var alert = this.alertCtrl.create({
      title: '배우자를 초대하시겠습니까?',
      buttons: [
        {
          text: '아니요',
          handler: data => {

          }
        },
        {
          text: '예',
          handler: data => {
            // this.firedata.child(this.userId).child("counseling").push({"name":this.name,"tel":this.tel,"type":this.type,"content":this.content})
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteparejaPage');
  }

}
