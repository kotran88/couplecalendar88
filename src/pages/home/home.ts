import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { KakaoCordovaSDK,AuthTypes } from 'kakao-sdk';
import { Naver } from "ionic-plugin-naver";
import { MainPage } from '../main/main';
 
declare var PhoneCallTrap:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//
//@ViewChild('datePicker') datePicker;
//@ViewChild(Navbar) navbar: Navbar;

export class HomePage {

  // @ViewChild('video1') videoPicker:ElementRef;
  ha:any="";
  constructor(public naverr: Naver,public kakaotalk:KakaoCordovaSDK,private iab: InAppBrowser,public navCtrl: NavController) {
    
    // setTimeout(()=>{
    //   this.videoPicker.type="video/mp4";
    //   this.videoPicker.src= "assets/imgs/ab.mp4";
    //   this.videoPicker.load();
    //   this.videoPicker.play();

    // },1000)
// const browser = this.iab.create('https://www.orac79.com/');

  }
  naver(){
    this.naverr.login()
    .then(response => {

      console.log(response);
      this.naverr.requestMe().then((r)=>{

        console.log(r);
        this.navCtrl.setRoot(MainPage,{"user":r});
      }).catch((e)=>{
        console.log(e);
      })
    })
    .catch(error => console.error(error));
  }
  kakao(){
    let loginOptions = {};
    loginOptions['authTypes'] = [
                                  AuthTypes.AuthTypeTalk, 
                                  AuthTypes.AuthTypeStory,
                                  AuthTypes.AuthTypeAccount
                                ];
    
    this.kakaotalk.login(loginOptions).then((res) => {
      console.log("done");
        console.log(res);
      }
    ).catch((e)=>{
      console.log(e);
    })

  }

}
