import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { DatePicker } from '@ionic-native/date-picker/ngx';

/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-management',
  templateUrl: 'management.html',
})
export class ManagementPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  current: number = 27;
  max: number = 100;
  stroke: number = 13;
  radius: number = 55;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;
  constructor(private datePicker: DatePicker,public navCtrl: NavController) {

 

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

 

 

   

 

    this.date = new Date();

    console.log(this.date);

    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];


this.getDaysOfMonth();
  }

  setDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  ionViewDidLoad() {

    setTimeout(()=>{
      this.current=80;
    },3000)
      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });


  }
  date: any;

  daysInThisMonth: any;

  daysInLastMonth: any;

  daysInNextMonth: any;

  monthNames: string[];

  currentMonth: any;

  currentYear: any;

  currentDate: any;

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
}
