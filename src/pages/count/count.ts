import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController} from 'ionic-angular';
import { IndexPage } from '../index';
import { SmoneyPage } from '../smoney/smoney';
import { MoneyPage } from '../money/money';
import { MoneyserviceProvider } from '../../providers/moneyservice/moneyservice';
import { ChargeserviceProvider } from '../../providers/chargeservice/chargeservice';
import { GraphPage } from '../graph/graph';
import { Chart} from 'chart.js'



declare var google;
/**
 * Generated class for the CountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-count',
  templateUrl: 'count.html',
  
})
export class CountPage {
                moneyList:any = false;
                chargeList:any =false;
                mytype:any
                income:any = false;
                charge:any = false;  
                all:any = false;
                total:any
                date:any
                sum:any
                moneyy:any ='';
                

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public moneyProvide : MoneyserviceProvider,
                public chargeProvide : ChargeserviceProvider,
                public loadingCtrl : LoadingController,
                public alertCtrl: AlertController) {
                  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountPage');

    this.moneyy = this.navParams.get('money');

}

  

gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  } 

gotoSmoney(){
this.navCtrl.setRoot(SmoneyPage)
}

gotoMoney(){
  this.navCtrl.setRoot(MoneyPage)
}


moneyData(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...',
  });
  loading.present();
  this.moneyProvide.getMoney().subscribe(data=>{
     // console.log("date = "+data[0].date)
      this.moneyList = data
      console.log("moneyList = ",data)
      loading.dismiss();
      
  })

}  

chargeData(){

  this.chargeProvide.getCharge().subscribe(chargeData=>{
  this.moneyProvide.getMoney().subscribe(moneyData=>{

       var total
       var charge = []
       var money = []

      for(var i = 0; i < chargeData.length ; i++){
        charge[i] = parseInt(chargeData[i].moneyy)
        money[i] = parseInt(moneyData[i].moneyy)
        total = money[i]-charge[i]
        console.log("total2 = ",total)
    }
    console.log("total = ",total);
    this.total = total

    })
  })
 
} 

mydate(sdate){
  console.log(sdate)
  this.moneyProvide.getallMoney(sdate).subscribe(data=>{
    var income = 0;
    var charge = 0;
    var sum = 0;
  
    for(var i = 0 ; i<data.length ; i++){
      if(data == 0){
        let alert = this.alertCtrl.create({
          title: 'ไม่พบข้อมูล',
          subTitle: "วันที่ "+sdate,
          
          buttons: ['ตกลง']
        });
  
        alert.present();
      }else if (data[i].date == sdate){
        if(data[i].type == 'รายรับ'){
          income = income + parseInt(data[i].moneyy);
        }else  if(data[i].type == 'รายจ่าย'){
          charge = charge + parseInt(data[i].moneyy)
        }
      }
          
      this.income = income
      this.charge = charge
      console.log(data);
      console.log("รายรับ = ",income);
      console.log("รายจ่าย = ",charge);
    } 
    sum = income - charge ;
    this.sum = sum
    console.log("sum = ",this.sum)

}) 
}

gotoGraph(){
  this.navCtrl.setRoot(GraphPage)
}

    }
