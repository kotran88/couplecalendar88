import { NavController,LoadingController,ModalController, IonicPage } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';

import firebase from 'firebase';

import { Component,ViewChild, ElementRef } from '@angular/core';

import { OneSignal } from '@ionic-native/onesignal/';
import { AngularFireDatabase } from 'angularfire2/database';
import { SettingPage } from '../setting/setting';
import { ManagementPage } from '../management/management';
import { CalendarmodalPage } from '../calendarmodal/calendarmodal';
import { CounselingpagePage } from '../counselingpage/counselingpage';
import { MainPage } from '../main/main';
import { Main2Page } from '../main2/main2';
/**
 * Generated class for the Main3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main3',
  templateUrl: 'main3.html',
})
export class Main3Page {

 
  exerciseName:any="namenone";
  exerciseIntensity:any="intensitynone"
  exerciseDuration:any="durationnone"
  view:any;
  firedata = firebase.database().ref('/accounts');

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

  thisisday:any;

  ar:any;

  ar_october:any;

  loading:any;
  showSubmenufourth:boolean=false;
  showSubmenuthird:boolean = false;
  showSubmenu: boolean = false;

  showSubmenufirst:boolean=false;

  title:any="main3 page"

 jsonData = {
  numbers: [
   { description: "1" },
    { description: "2" },
    { description: "3" }
  ],
  fruits: [
    { description: "Apple" },
    { description: "Banana" },
    { description: "Tangerine" }
  ],
  firstNames: [
    { name: "Fred", id: '1' },
    { name: "Jane", id: '2' },
    { name: "Bob", id: '3' },
    { name: "Earl", id: '4' },
    { name: "Eunice", id: '5' }
  ],
  lastNames: [
    { name: "Johnson", id: '100' },
    { name: "Doe", id: '101' },
    { name: "Kinishiwa", id: '102' },
    { name: "Gordon", id: '103' },
    { name: "Smith", id: '104' }
  ]
};
  constructor(public modal:ModalController,private selector: WheelSelector,public _loadingCtrl:LoadingController,private afDatabase:AngularFireDatabase,public navCtrl: NavController) {
    this.ar=new Array();

    this.ar_october=new Array();

    console.log("constructor");

   

    this.showLoading();

  }
  counseling(){
    this.navCtrl.push(CounselingpagePage);
  }
  //============== 병원 일정 =====================//
  hospital_ex:any=false;
  expand_cal() {
      this.hospital_ex=!this.hospital_ex;
  }
  //=============== 운동 ========================//
  expanding=false;   
  exercise_add=true;  
  add_ex:any=false;
  expand(){
    this.expanding=!this.expanding;
    this.exercise_add=true;
  }
 add_exercise(){
    this.exercise_add=false;
 }
 exercise_input() {
   this.exercise_add=true;
 }
 change_ex_before(){
 }
 change_ex_after() {
 }
 clickcalendar(day){
  let modal = this.modal.create(CalendarmodalPage);
  modal.present();
  modal.onDidDismiss( () => {
    // this.createUser();
  })
 }
 setExercise(){
  this.selector.show({
    title: "운동종목을 정해주세요",
    items: [
      this.jsonData.numbers
    ],
    positiveButtonText: "Ok",
    negativeButtonText: "Nope",
    defaultItems: [
      {index:0, value: this.jsonData.numbers[2].description},
    ]
  }).then(
    result => {
      this.exerciseName=result[0].description;
      console.log(result[0].description);
    },
    err => console.log('Error: ' + JSON.stringify(err))
    );
 }
 setExercise1(){
  this.selector.show({
    title: "운동정도를 정해줗세요",
    items: [
      this.jsonData.numbers
    ],
    positiveButtonText: "Ok",
    negativeButtonText: "Nope",
    defaultItems: [
      {index:0, value: this.jsonData.numbers[2].description},
    ]
  }).then(
    result => {
      this.exerciseIntensity=result[0].description;
    },
    err => console.log('Error: ' + JSON.stringify(err))
    );
 }
 setExercise2(){
  this.selector.show({
    title: "운동 시간을 정해주세요",
    items: [
      this.jsonData.numbers
    ],
    positiveButtonText: "Ok",
    negativeButtonText: "Nope",
    defaultItems: [
      {index:0, value: this.jsonData.numbers[2].description},
    ]
  }).then(
    result => {
      this.exerciseDuration=result[0].description;
    },
    err => console.log('Error: ' + JSON.stringify(err))
    );
 }
 inputExercise(){
   console.log(this.exerciseName);
   this.firedata.child(this.userId).child("exercise").push({"name":this.exerciseName,"intensity":this.exerciseIntensity,"duration":this.exerciseDuration})
 }
 //==================== 음식 ====================//
 food_ex=false;
 food_add=false;
 expand_food() {
    this.food_ex=!this.food_ex;
 }
 add_food(value) {
   this.food_add = true;
   console.log("click :"+value);

 }
 food_input(){
   this.food_add = false;
 }
 //================== 카페인 =================== //
 caffein_ex = false;
 coffee_num = 0; // 마신 커피 수
 expand_caffein() {
   this.caffein_ex=!this.caffein_ex;
 }
 click_coffee(e) {
   var x =e.target.src.toString();
    if(x.includes("coffee2.png")){
      e.target.src = "assets/imgs/gauge/coffee1.png";
      ++this.coffee_num;
    }
    else {
      e.target.src = "assets/imgs/gauge/coffee2.png";
      --this.coffee_num;
    }
    
 }
 //================== 물 =======================//
 water_ex = false;
 water_num = 0; // 마신 물의 수
 expand_water() {
   this.water_ex=!this.water_ex;
 }
 click_water(e){
  var x =e.target.src.toString();
  if(x.includes("water2.png")){
    e.target.src = "assets/imgs/gauge/water1.png";
    ++this.water_num;
  }
  else {
    e.target.src = "assets/imgs/gauge/water2.png";
    --this.water_num;
  }
 }
 menuItemHandlerfourth(){
  this.showSubmenufourth=!this.showSubmenufourth;
 }
 //=============================================//
menuItemHandler(): void {

  this.showSubmenu = !this.showSubmenu;

}

 menuItemHandlerthird(){
  this.showSubmenuthird=!this.showSubmenuthird;
 }
 gotomanagement(){
   this.navCtrl.push(ManagementPage,{"id":"test"})
 }
 ionViewDidLoad(){

  // setTimeout(()=>{
  //   window.alert( window["plugins"].OneSignal)
  //   window["plugins"].OneSignal
  //   .startInit("2a4ab592-b87f-474a-9b98-77a1983d4b38", "795304269394")
  //   .handleNotificationOpened(function(jsonData) {
  //     console.log("opened!22222");
     
      
  //   })
  //   .handleNotificationReceived(function(d){
  //     console.log(d);
     
  //   })
  //   .endInit();
  //   // window["plugins"].OneSignal.clearOneSignalNotifications();
  //   window["plugins"].OneSignal.getIds((idx)=>{
        
  //     window.alert(idx.userId);
  //     console.log("id is : "+idx.userId);
  //   });
  // },500)
 
  
 }
menuItemHandlerfirst(): void {

  this.showSubmenufirst = !this.showSubmenufirst;

}

  dismissLoading(){

    if(this.loading){

        this.loading.dismiss();

        this.loading = null;

    }

}

showLoading() {

  if(!this.loading){

      this.loading = this._loadingCtrl.create({

          content: 'Please Wait...'

      });

      this.loading.present();

  }

}

  ionViewWillEnter() {

 

    console.log("ionViewWillEnter")

   

    var today = new Date();

    today.setHours(today.getHours()+9);

    

    var d = new Date();

    var days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];

    var day =  days[d.getDay()];

 

  

    var thisday = new Date();

    thisday.toLocaleString('ko-KR', { hour: 'numeric', minute: 'numeric', hour12: true })

    var month = thisday.getMonth();

    var date = thisday.getDate();

    var hour = thisday.getHours();

    var minute = thisday.getMinutes();

    var fullyear = thisday.getFullYear();

    console.log("this is the day")

    // new Date().toString("hh:mm tt")

    console.log(thisday)

    console.log(today)

    console.log(month+1);

    console.log(date);

    console.log((hour)+"시");

    console.log(minute);

    console.log(fullyear)

 

 

     this.thisisday = fullyear+"년"+(month+1)+"월"+date+"일"+(hour)+"시"+minute+"분";

 

    console.log(this.thisisday);

    var user = firebase.auth().currentUser;

 

 

    console.log("userinfo:"+user);

 

    

    // this.storage.set("loginFlag",true);

    console.log(user);

    

    if(user==null){

      console.log("set1");

  }else{

    this.uid=user.uid;

  }

   

 

    this.date = new Date();

    console.log(this.date);

    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    this.getDaysOfMonth();

    // this.loadEventThisMonth();

   

 

console.log(this.uid);

      // this.firedata.child(this.uid).update({

      //   "lastLogin":this.thisisday

      // })

 

      console.log("gg");

  this.loadEvent();

  }

  addEvent(day,flag) {

 

    var newday="";

    var newMonth="";

    switch(this.currentMonth){

      case  "September":

      newMonth="09";

      break;

      case  "October":

      newMonth="10";

    }

    if(day<10){

      newday="0".concat(day);

    }else{

      newday=day;

    }

 

    // this.navCtrl.push(AddEventPage,{"chosenDate":this.currentMonth+" , "+day,"flag":flag,"uid":this.uid,"year":this.currentYear,"month":newMonth,"day":newday});

  }

  async loadEvent(){

    console.log("loadEvent come");

    console.log(this.ar);  // <-- here have blanked value 

    var arrayseptember=new Array();

    var arrayoctober=new Array();

     new Promise((resolve, reject) => {

  //   this.firedata.child(this.uid).child("record").once('value').then((snapshot) =>{

  //       var value:any;

  //       for(var result in snapshot.val()){

  //         console.log(result); //20180915

  //         var day = result.substring(result.length-2,result.length);

  //         var month=result.substring(result.length-4,result.length-2);

  //         if(month=="09"){

  //           if(snapshot.val()[result].pic!=null&&snapshot.val()[result].pic!=undefined){

  //             value= {[day]: [snapshot.val()[result].exercise,snapshot.val()[result].face,snapshot.val()[result].weight,,snapshot.val()[result].pic]};

  //           }else{

  //             value= {[day]: [snapshot.val()[result].exercise,snapshot.val()[result].face,snapshot.val()[result].weight]};

  //           }

  //           arrayseptember.push(value);

  //         }else if(month=="10"){

  //           if(snapshot.val()[result].pic!=null&&snapshot.val()[result].pic!=undefined){

  //             value= {[day]: [snapshot.val()[result].exercise,snapshot.val()[result].face,snapshot.val()[result].weight,snapshot.val()[result].pic]};

  //           }else{

  //             value= {[day]: [snapshot.val()[result].exercise,snapshot.val()[result].face,snapshot.val()[result].weight]};

  //           }

  //           arrayoctober.push(value);

  //         }

  //         console.log("valueis");

  //         console.log(value);

  //       }

  //       console.log("ab");

  //       this.ar=arrayseptember; //<-- but here undefined,,, why????

  //       this.ar_october=arrayoctober;

  //         console.log(this.ar);

  //         resolve();

  //         this.a= {1: ["ab","testda"],3:["cccc"]}; 

  //   this.big={"September":this.ar,"October":this.ar_october}

  //   console.log(this.a);

  //  })

  })

  console.log("loadEvent End");

  

  

  }

  setting(){
    this.navCtrl.push(SettingPage,{"id":"dummyid"})
  }

  checkEvent(day){

    this.checkingArray= new Array();

    //디비에서 해당일에 있는지 조회해서

    //어레이에 넣어줌. 

 

    var array_keys = new Array();

      var array_values = new Array();

 

      var second_array_keys=new Array();

      var second_array_values=new Array();

      var values=new Array();

 

      var monthIndex=0;

      for (var key in this.big) {

          array_keys.push(key);

          array_values.push(this.big[key]);

      }

 

      

      for(var i=0; i<array_keys.length; i++){

       

        // console.log(array_keys[i]+"//"+this.currentMonth);

        if(array_keys[i]==this.currentMonth){

 

          monthIndex=i;

 

          for( var val in array_values[monthIndex]){

 

            for(var v in array_values[monthIndex][val]){

              if(day==v){

                console.log(array_values[monthIndex][val][v])

                for(var i=0; i<array_values[monthIndex][val][v].length; i++){

                  console.log(array_values[monthIndex][val][v][i])

                  if(i==0){

                    console.log("exercise : "+array_values[monthIndex][val][v][i]);

                    this.checkingArray.push({"exercise":array_values[monthIndex][val][v][i]});

                  }else if(i==1){

                    console.log("face : "+array_values[monthIndex][val][v][i]);

                    this.checkingArray.push({"face":array_values[monthIndex][val][v][i]});

                  }else if(i==2){

                    console.log("weight : "+array_values[monthIndex][val][v][i]);

                    if(array_values[monthIndex][val][v][i]==0){

 

                      console.log("weight is 0!");

                    }else{

                      this.checkingArray.push({"weight":array_values[monthIndex][val][v][i]});

                    }

                    

                  }else{

 

                    this.checkingArray.push({"photo":array_values[monthIndex][val][v][i]});

                  }

                  

                }

             console.log(this.checkingArray);

            

              return this.checkingArray;

              }

            

            }

            // if(day==val){

 

            //   this.checkingArray.push(array_values[monthIndex][val]);

            //   return this.checkingArray;

            // }

          }

          // for(var k=0; k<array_values[monthIndex].length; k++){

          //   console.log(array_values[])

          // }

          var count=-1; 

          for (var key in array_values[i]) {

          

            count++;

            

            second_array_keys.push(key);

            second_array_values.push(array_values[monthIndex]);

          }

          

          for(var j=0; j<second_array_keys.length; j++){

            // console.log(second_array_keys[i]);

            if(day==second_array_keys[j]){

 

              var count=-1;

              for(var result in array_values[monthIndex]){

 

                count++;

                

                if(result==day){

                

                }

              }

             

              // console.log(second_array_values[monthIndex]);

            }

            

          }

        }

      }

      

      //day ==20

      //array_keys[i] == 

      // for(var i=0; i<array_keys.length; i++){

      //   if(day==array_keys[i]){

      //     console.log("해당하는 키값은 : "+array_keys[i]);

 

      //     console.log("해당밸류는 : "+array_values[i]);

          

      //     this.checkingArray.push(array_values[i]);

      //     return this.checkingArray;

      //   }

      // }

     

      

   

      if(day==30){

        this.dismissLoading()

      }

 

    

  }

  checkEventt(day) {

    var hasEvent = false;

    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";

    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";

    // console.log(this.eventList);

    this.eventList.forEach(event => {

 

      // console.log(this.eventList);

      // console.log(event.dtend+"????"+event.dtstart);

      // console.log(this.timeConverter(event.dtend)+"!!!!!"+this.timeConverter(event.dtstart))

      if(((event.dtstart >= thisDate1) && (event.dtstart <= thisDate2)) || ((event.dtend >= thisDate1) && (event.dtend <= thisDate2))) {

       

        console.log("hasEvent!!!!"+day);

        hasEvent = true;

      }

    });

    return hasEvent;

  }

   timeConverter(UNIX_timestamp){

 

    var date = new Date(UNIX_timestamp*1000);

// Hours part from the timestamp

var hours = date.getHours();

// Minutes part from the timestamp

var minutes = "0" + date.getMinutes();

// Seconds part from the timestamp

var seconds = "0" + date.getSeconds();

 

// Will display time in 10:30:23 format

var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

 

    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    var year = date.getFullYear();

    var month = months[date.getMonth()];

    var dates= date.getDate().toLocaleString;

    console.log("year:"+year+"/month:"+month+"/date:"+date+"/hours:"+hours+"///minutes"+minutes);

    var time = year+ ' ' + month + ' ' +  date + ' ' + hours + ':' + minutes + ':' + seconds ;

    return time;

  }

  selectDate(day) {

    console.log(this.currentMonth+"selectDate come:"+day);

    var result = this.checkEvent(day);

    console.log(result);
    var date = this.currentMonth+" "+day;
    var flag=false;
    //=============modal 추가 ==============//
    let modal = this.modal.create(CalendarmodalPage,{date:date});
    modal.present();
    modal.onDidDismiss( () => {
      
  
    });

    //=====================================//
    if(result==undefined){

      flag=false;

    }else{

      flag=true;

    }

    this.addEvent(day,flag);

  

  }

  loadEventThisMonth() {

    console.log("loadEventThisMonth")

    this.eventList = new Array();

    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);

    console.log(startDate+"and : "+endDate);

    // this.calendar.listEventsInRange(startDate, endDate).then(

    //   (msg) => {

    //     console.log("home msg:");

    //     console.log(msg);

    //     msg.forEach(item => {

    //       console.log(item);

    //       this.eventList.push(item);

    //     });

    //   },

    //   (err) => {

    //     console.log(err);

    //   }

    // );

  }

  goToLastMonth() {

    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);

    this.getDaysOfMonth();

  }

  goToNextMonth() {

    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);

    this.getDaysOfMonth();

  }

  getDaysOfMonth() {

    this.daysInThisMonth = new Array();

    this.daysInLastMonth = new Array();

    this.daysInNextMonth = new Array();

    this.currentMonth = this.monthNames[this.date.getMonth()];

    this.currentYear = this.date.getFullYear();

    if(this.date.getMonth() === new Date().getMonth()) {

      this.currentDate = new Date().getDate();

    } else {

      this.currentDate = 999;

    }

  

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();

    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();

    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {

      this.daysInLastMonth.push(i);

    }

  

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();

    for (var i = 0; i < thisNumOfDays; i++) {

      this.daysInThisMonth.push(i+1);

    }

  

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();

    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();

    for (var i = 0; i < (6-lastDayThisMonth); i++) {

      this.daysInNextMonth.push(i+1);

    }

    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;

    if(totalDays<36) {

      for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {

        this.daysInNextMonth.push(i);

      }

    }
  }
  //========== 캘린더 이동 기능 =============//
  //배란주기 캘린더
  mv_main() {
    this.navCtrl.setRoot(MainPage);
  }
  //인공수정 캘린더
  mv_main2() {
    this.navCtrl.setRoot(Main2Page);
  }
  //시험관 아기 캘린더
  mv_main3() {
    this.navCtrl.setRoot(Main3Page);
  }
}