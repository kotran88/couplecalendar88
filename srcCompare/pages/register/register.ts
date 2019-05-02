import { Component,ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../main/main';
import firebase from 'firebase';
import { PrivateAgreePage } from '../private-agree/private-agree';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 //=======================추가 해야될 사항 =====================//
 //     Validator 적용하기(유효성 검사,개인정보보호,알림허용)
 //
 //////////////////////////////////////////////////////////////
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firedata2 = firebase.database().ref();
  //=========== 회원가입 변수들 ============//
  @ViewChild('sex') sex;
  email='';
  password='';
  repassword='';
  nickname='';
  birth='';
  phone='';
  //============= formgroup 변수 =========================//
  form: FormGroup;
  //============== DB 보내기 전 유효검사 변수 ===============//
  validateFlag = false;
  //=====================================================//
  constructor(private db: AngularFireDatabase,private firebaseAuth: AngularFireAuth,public alertCtrl:AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb : FormBuilder,
    public modal: ModalController) {
  }
  //============== 페이지 현재 위치 출력 ========================//
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  createUser() {
    if(!this.validate()){
      return false;
    }
    //==========validateFlag 가 true일 때 DB전송 ==============//
    if(this.validateFlag==true) {
        this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email,this.password)
        .then (data=> {
          var email = this.email.replace('.','*'); 
          console.log("firebase Authentication complete: ", data);
          this.firedata2.child("accounts").child(email).update({
            nickname: this.nickname,
            birth: this.birth,
            phone: this.phone,
            sex: this.sex
          }).then(()=>{
            window.alert("발급완료");
            
          })
        })
        .catch(error=>{
          console.log("firebase Autentication failed : ", error);
        });   
  }
}

  // ====== 유효성 검사 ====== //
  validate() {
    let str='';
    if(this.email =='') {
      str = '이메일주소를 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.email.indexOf('@') == -1) {
      str = '이메일 형식이 올바르지 않습니다.';
      this.confirmAlert(str);
      return false;
    }
    if(this.nickname =='') {
      str = '닉네임을 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.password ==''){
      str = '비밀번호를 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.repassword ==''){
      str = '비밀번호 확인을 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.password != this.repassword){
      str='비밀번호가 일치하지 않습니다. 확인해주세요';
      this.confirmAlert(str);
      return false;
    }
    if(this.birth ==''){
      str = '생년월일을 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.phone ==''){
      str = '휴대폰 번호를 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    if(this.sex ==''){
      str = '성별을 입력해 주세요.';
      this.confirmAlert(str);
      return false;
    }
    this.validateFlag=true;
    return true;
  }

//===== 에러메시지 출력 =====//
  confirmAlert(str) {
    let alert = this.alertCtrl.create({      
        subTitle: str,
        buttons: ['확인']
    });
     alert.present({animate:false});
  }
  //======== 성별 선택 ==========//
  radio_female(){
    this.sex="female";
  }
  radio_male(){
    this.sex="male";
  }
  /////////////핸드폰 번호 - 넣어주기 /////////////
  phone_number(){
  }
  // ==========개인정보 보호동의 창 만들기 ============//
  open() {
  let modal = this.modal.create(PrivateAgreePage);
  modal.present();
  modal.onDidDismiss( () => {
    this.createUser();
    window.alert("dismiss");
  })
  }
}

