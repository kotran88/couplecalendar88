import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  jsonData = {
    numbers: [
      { description: "1" },
      { description: "2" },
      { description: "3" },
      { description: "4" },
      { description: "5" },
      { description: "6" },
      { description: "7" },
      { description: "8" },
      { description: "9" },
      { description: "10" },
      { description: "11" },
      { description: "12" },
      { description: "13" },
      { description: "14" },
      { description: "15" },
      { description: "16" },
      { description: "17" },
      { description: "18" },
      { description: "19" },
      { description: "20" },
      { description: "21" },
      { description: "22" },
      { description: "23" },
      { description: "24" },
      { description: "25" },
      { description: "26" },
      { description: "27" },
      { description: "28" },
      { description: "29" },


    ]
  };
  constructor(private selector: WheelSelector,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  setInterval(){
    this.selector.show({
      title: "How Much?",
      items: [
        this.jsonData.numbers
      ],
      positiveButtonText: "Ok",
      negativeButtonText: "Nope",
      defaultItems: [
        {index: 0, value: this.jsonData.numbers[2].description}
      ]
    }).then(
      result => {
        console.log(result[0].description);
      },
      err => console.log('Error: ' + JSON.stringify(err))
      );
  }

}
