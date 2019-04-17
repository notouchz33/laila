import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = [
  {name:'Training',phone:'12345'},
  {name:'Support',phone:'333'},
  {name:'CEO',phone:'5555'}

  ]

  constructor(public navCtrl: NavController) {

  }
  showDetail(contact){
   // alert(contact.name);
   this.navCtrl.push("DetailPage", contact);
  }

  login(){
    this.navCtrl.push(LoginPage)
  }
   
  register(){
    this.navCtrl.push(RegisterPage)
  }
  signUp(){

    this.navCtrl.push(RegisterPage);
  
    }
}