import { Component } from '@angular/core';
import { IonicPage,AlertController,MenuController, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';
/**
 * Generated class for the SelfhelpingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-selfhelping',
  templateUrl: 'selfhelping.html',
})
export class SelfhelpingPage {
  userId="kim22@naver*com";

  firedata = firebase.database().ref('/accounts');
  name:any;
  tel:any;
  type:any;
  content:any;

  date: any;

    daysInThisMonth: any;

    daysInLastMonth: any;

    daysInNextMonth: any;

    monthNames: string[];
    interval:any;
    currentMonth: any;

    currentYear: any;

    duration:any;
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
  constructor(public alertCtrl:AlertController,public menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {

    if(this.navParams.get("flag")=="transit"){
      this.menu.close();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfhelpingPage');
  }
  confirm(){


    console.log(this.name)
    console.log(this.tel);
    console.log(this.type);
    console.log(this.content);

    
    var alert = this.alertCtrl.create({
      title: '자조모임 신청을 완료하시겠습니까?',
      buttons: [
        {
          text: '아니요',
          handler: data => {

          }
        },
        {
          text: '예',
          handler: data => {
            this.firedata.child(this.userId).child("selfhelping").push({"name":this.name,"tel":this.tel,"type":this.type,"content":this.content})
          }
        }
      ]
    });
    alert.present();
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


 

    

  //   if(user==null){

  //     console.log("set1");

  // }else{

  //   this.uid=user.uid;

  // }

   

 

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
  async loadEvent(){

    console.log("loadEvent come");

  console.log("loadEvent End");

  

  

  }

  checkEvent(day){

    console.log("checkEvent come");
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

                    console.log("mensual : "+array_values[monthIndex][val][v][i]);

                    this.checkingArray.push({"mensual":array_values[monthIndex][val][v][i]});

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

            }

            

          }

        }

      }


     

      

   

      if(day==30){


      }

 

    

  }

}
