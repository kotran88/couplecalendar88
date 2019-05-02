import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../main/main';
import { FindPwPage } from '../find-pw/find-pw';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email='';
  password='';
  ValidateFlag=false;
  constructor(private firebase : AngularFireAuth,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    if(!this.validate()){
      return false;
    }
      if(this.ValidateFlag==true)
      this.firebase.auth.signInWithEmailAndPassword(this.email,this.password)
      .then(data=>{
        this.navCtrl.setRoot(MainPage,{"id":this.email});
      }).catch(error=>{
        alert("login failed");
      })
      
  }
  validate() {
    let str='';
    if(this.email =='') {
      str = '이메일을 입력해주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.email.indexOf('@') == -1) {
      str = '이메일 주소를 확인해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.password == '') {
      str = '비밀번호를 입력해주세요.';
      this.confirmAlert(str);
      return false;
    }

    this.ValidateFlag=true;
    return true;
  }

  confirmAlert(str) {
    let alert = this.alertCtrl.create({      
        subTitle: str,
        buttons: ['확인']
    });
     alert.present({animate:false});
  }
  find() {
    this.navCtrl.push(FindPwPage, {} , {animate:false});
  }
}
