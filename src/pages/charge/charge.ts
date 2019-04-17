import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import 'rxjs/add/operator/map';
import { ChargeserviceProvider } from '../../providers/chargeservice/chargeservice';
import { SmoneyPage } from '../smoney/smoney';
import { MoneyPage } from '../money/money';
import { CountPage } from '../count/count';

/**
 * Generated class for the ChargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charge',
  templateUrl: 'charge.html',
})
export class ChargePage {

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public chargeProvide : ChargeserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChargePage');
  }
  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }

  gotoSmoney() {
    this.navCtrl.setRoot(SmoneyPage);
  }
  

  gotoCount(){
    this.navCtrl.setRoot(CountPage)
  }

  
  money() {
    this.navCtrl.setRoot(MoneyPage);
  }

  toCharge(date,moneyy,detail){
    console.log("date = "+date)
    console.log("2 = "+moneyy)
    console.log("3 = "+detail)
    var type = 'รายจ่าย';
    this.chargeProvide.doCharge(date,type,moneyy,detail).subscribe(data=>{
      console.log("charge = "+data.status)
        if(data.status == "success"){
        let alert = this.alertCtrl.create({
          title: 'รายจ่าย',
          subTitle: 'เพิ่มข้อมูล',
          buttons: [{
            text: 'ตกลง',
            handler: data=>{
              this.navCtrl.setRoot(ChargePage);
            }
          }]
        });
        alert.present();
    }
    }) 
  }
  
  



}
