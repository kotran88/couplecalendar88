import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { KakaoCordovaSDK } from 'kakao-sdk';
import { Naver } from "ionic-plugin-naver";
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { Main2Page } from '../pages/main2/main2';
import { Main3Page } from '../pages/main3/main3';
import { RegisterPage } from '../pages/register/register';
import { LoginPage} from '../pages/login/login';
import { RegisterTypePage } from '../pages/register-type/register-type';
import { FindPwPage } from '../pages/find-pw/find-pw';
import { SettingPage } from '../pages/setting/setting';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { WheelSelector } from '@ionic-native/wheel-selector';

import { OneSignal } from '@ionic-native/onesignal/';
import { ManagementPage } from '../pages/management/management';
import { CalendarmodalPage } from '../pages/calendarmodal/calendarmodal';
import { CounselingpagePage } from '../pages/counselingpage/counselingpage';
import { PrivateAgreePage } from '../pages/private-agree/private-agree';
import { SelfhelpingPage } from '../pages/selfhelping/selfhelping';
import { InviteparejaPage } from '../pages/invitepareja/invitepareja';
var config = {
  apiKey: "AIzaSyBoXTwwQkwmEAvqpUCnKX5xvM7DFtHCKeQ",
  authDomain: "cosmetics-bac3b.firebaseapp.com",
  databaseURL: "https://cosmetics-bac3b.firebaseio.com",
  projectId: "cosmetics-bac3b",
  storageBucket: "cosmetics-bac3b.appspot.com",
  messagingSenderId: "795304269394"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    MyApp,
    CalendarmodalPage,
    HomePage,
    ManagementPage,
    MainPage,
    Main2Page,
    Main3Page,
    RegisterPage,
    LoginPage,
    SelfhelpingPage,
    RegisterTypePage,
    CounselingpagePage,
    FindPwPage,
    InviteparejaPage,
    SettingPage,
    PrivateAgreePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelfhelpingPage,
    CounselingpagePage,
    MainPage,
    Main2Page,
    Main3Page,
    RegisterPage,
    CalendarmodalPage,
    InviteparejaPage,
    LoginPage,
    RegisterTypePage,
    ManagementPage,
    FindPwPage,
    SettingPage,
    PrivateAgreePage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    KakaoCordovaSDK,
    OneSignal,
    Naver,
    AngularFireAuth,
    DatePicker,
    WheelSelector,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
