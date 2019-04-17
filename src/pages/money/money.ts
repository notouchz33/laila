import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MoneyserviceProvider } from '../../providers/moneyservice/moneyservice';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { IndexPage } from '../index';
import { SexamPage } from '../sexam/sexam';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChargePage } from '../charge/charge';
import { SmoneyPage } from '../smoney/smoney';
import { CountPage } from '../count/count';




/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {
  orderform: any;
  student:any
  type:any 
  tap1Root = HomePage


  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public moneyProvide : MoneyserviceProvider) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneyPage');
  }

  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }

  charge() {
    this.navCtrl.setRoot(ChargePage);
  }
   
  
  money(date,moneyy,detail){
    console.log("date = "+date)
    console.log("2 = "+moneyy)
    console.log("3 = "+detail)
    var type = 'รายรับ';

    this.moneyProvide.doMoney(date,type,moneyy,detail).subscribe(data=>{
      console.log("money = "+data.status)
        if(data.status == "success"){
        let alert = this.alertCtrl.create({
          title: 'รายรับ',
          subTitle: 'เพิ่มข้อมูล',
          buttons: [{
            text: 'ตกลง',
            handler: data=>{
              this.navCtrl.setRoot(MoneyPage);
            }
          }]
        });
        alert.present();
    }
    }) 
  
}

// gotoSexam(){
//   this.navCtrl.push(SexamPage)
// }



gotoSmoney(){
  this.navCtrl.setRoot(SmoneyPage)
}

money2(){
  this.navCtrl.setRoot(MoneyPage)
}

gotoCount(){
  this.navCtrl.setRoot(CountPage)
}

}
