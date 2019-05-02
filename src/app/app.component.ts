import { Component ,ViewChild} from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KakaoCordovaSDK } from 'kakao-sdk';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { RegisterPage} from '../pages/register/register';
import {LoginPage } from '../pages/login/login';
import { Main2Page } from '../pages/main2/main2';
import { ManagementPage } from '../pages/management/management';
import { Main3Page } from '../pages/main3/main3';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mycontent') nav: NavController
  exerciseName:any="namenone";
  exerciseIntensity:any="intensitynone"
  exerciseDuration:any="durationnone"
  view:any;
  // firedata = firebase.database().ref('/accounts');

  userId="kim22@naver*com";
  date: any;

    daysInThisMonth: any;

    daysInLastMonth: any;

    daysInNextMonth: any;

    monthNames: string[];

    currentMonth: any;

    currentYear: any;

    currentDate: any;

    eventList: any;

  selectedEvent: any;

  isSelected: any;

  checkingArray:any;

  a:any;

  big:any;

  b:any;

  uid:any;

  navCtrl:any;
  thisisday:any;

  ar:any;

  ar_october:any;

  loading:any;
  showSubmenufourth:boolean=false;
  showSubmenuthird:boolean = false;
  showSubmenu: boolean = false;

  showSubmenufirst:boolean=false;

  rootPage:any = MainPage;

 menuItemHandlerfourth(){
  this.showSubmenufourth=!this.showSubmenufourth;
 }
menuItemHandler(): void {
  this.showSubmenu = !this.showSubmenu;
}
 menuItemHandlerthird(){
  this.showSubmenuthird=!this.showSubmenuthird;
 }
 //========== 캘린더 이동 기능 =============//
  //배란주기 캘린더
  mv_main() {
    this.nav.setRoot(MainPage,{"flag":"transit"});
  }
  //인공수정 캘린더
  mv_main2() {
    this.nav.setRoot(Main2Page,{"flag":"transit"});
  }
  //시험관 아기 캘린더
  mv_main3() {
    this.nav.setRoot(Main3Page,{"flag":"transit"});
  }
 gotomanagement(){
   this.nav.push(ManagementPage,{"id":"test"})
 }
 
menuItemHandlerfirst(): void {

  this.showSubmenufirst = !this.showSubmenufirst;

}

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

