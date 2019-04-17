import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
//import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { RegisterServiceProvider} from '../../providers/register-service/register-service' 
import { LoginPage } from '../login/login';
  
 

@Component({
selector: 'page-register',
templateUrl: 'register.html'
})

export class RegisterPage {
// @ViewChild("name") name;
// @ViewChild("surname") surname;
// @ViewChild("class") class;
// @ViewChild("username") username; 
// @ViewChild("password") password;

constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    // private http: Http, 
      public loading: LoadingController,
      public registProvide : RegisterServiceProvider) {

}
    register(name,surname,myclass,user,pass){
        this.registProvide.doRegister(name,surname,myclass,user,pass).subscribe(data=>{
        console.log("status = "+data.status)
        if(data.status == "success"){
            let alert = this.alertCtrl.create({
              title: 'ลงทะเบียน',
              subTitle: 'กรุณาเข้าสู่ระบบ',
              buttons: [{
                text: 'ตกลง',
                handler: data=>{
                  this.navCtrl.setRoot(LoginPage);
                }
              }]
            });
            alert.present();
        }
    })
   
    }
}