import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CalendarmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendarmodal',
  templateUrl: 'calendarmodal.html',
})
export class CalendarmodalPage {
  duration:boolean=false;
  interval:boolean=false;
  date:any; // modal title 날짜
  bool_loveday = false; // loveday 이미지 true false
  sgri_start = true; // 생리 시작
  sgri_end = false; // 생리 마침
  first=true;
  second=false;
  third=false;
  hospital=false;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarmodalPage');
  }
  ionViewWillEnter() {
    this.date = this.navParams.get('date');
    console.log(this.date);
  }
  //======= Love day ===========//
  loveday(e){
    var x =e.target.src.toString();
    if(x.includes("ledline")){
      e.target.src = "assets/imgs/love_full.png";
      this.bool_loveday=true;
    }
    else {
      e.target.src = "assets/imgs/love_ledline.png";
      this.bool_loveday=false;
    }
  }
  //======= 생리 시작 ==========//
  sgri_st_true(){
    this.sgri_start=true;
  }
  sgri_st_false() {
    this.sgri_start=false;
  }
  //======= 생리 시작 ==========//
  sgri_end_true(){
    this.sgri_end=true;
  }
  sgri_end_false() {
    this.sgri_end=false;
  }

  //========BMI 계산============//
  calculate(){

  }
  //========생리 양 ============//

  //======== 생리 통 ============//
  
  //======= 병원 방문 ==========//
  hospital_visit() {
    console.log("hospital come");
    this.hospital=true;
    this.first=false;
    this.third=false;
    this.second=false;
  }

  //======== BMI =============//
  bmi_write(){

    this.hospital=false;
    this.first=false;
    this.third=false;
    this.second=true;
  }
  //========= NOTE ===========//
  note_write() {
    this.hospital=false;
    this.first=false;
    this.third=true;
    this.second=false;
  }
  // ==========등록버튼 ================//
  confirm(){
    console.log(this.duration);
    console.log(this.interval);
    this.viewCtrl.dismiss({"duration":this.duration,"interval":this.interval});
  }
  
}
