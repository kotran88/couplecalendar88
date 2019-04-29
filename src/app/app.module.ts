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
import { RegisterPage } from '../pages/register/register';
import { LoginPage} from '../pages/login/login';
import { RegisterTypePage } from '../pages/register-type/register-type';
import { FindPwPage } from '../pages/find-pw/find-pw';
import {CameraselectPage } from '../pages/cameraselect/cameraselect';
import { SettingPage } from '../pages/setting/setting';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { WheelSelector } from '@ionic-native/wheel-selector';

import { OneSignal } from '@ionic-native/onesignal/';
import { ManagementPage } from '../pages/management/management';
import { CalendarmodalPage } from '../pages/calendarmodal/calendarmodal';
import { CounselingpagePage } from '../pages/counselingpage/counselingpage';
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
    RegisterPage,
    LoginPage,
    RegisterTypePage,
    CounselingpagePage,
    FindPwPage,
    CameraselectPage,
    SettingPage
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
    CounselingpagePage,
    MainPage,
    RegisterPage,
    CalendarmodalPage,
    LoginPage,
    RegisterTypePage,
    ManagementPage,
    FindPwPage,
    CameraselectPage,
    SettingPage
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
