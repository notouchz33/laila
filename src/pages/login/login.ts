import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import { LoginServiceProvider } from '../../providers/login-service/login-service'

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loginService: LoginServiceProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }
  login(user,pass){
    console.log("user = "+user)
    console.log("pass = "+pass)
    this.loginService.doLogin(user,pass).subscribe(data=>{
      console.log("status = "+data.status)
      if(data.status == "success"){
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'เข้าสู่ระบบ',
          buttons: [{
            text: 'ตกลง',
            handler: data=>{
              this.navCtrl.setRoot(IndexPage);
            }
          }]
        });
        alert.present();

    } if(data.status == "fail"){
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: 'ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด',
        buttons: [{
          text: 'ตกลง',
          handler: data=>{
          
          }
        }]
      });
      alert.present();
  }




    })
  }

}

