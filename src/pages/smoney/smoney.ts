import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MoneyPage } from '../money/money';
import { IndexPage } from '../index';
import { MoneyserviceProvider } from '../../providers/moneyservice/moneyservice';
import { ChargeserviceProvider } from '../../providers/chargeservice/chargeservice';
import { GraphPage } from '../graph/graph';

import { CountPage } from '../count/count';

/**
 * Generated class for the SmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-smoney',
  templateUrl: 'smoney.html',
})
export class SmoneyPage {
  moneyList:any ;
  chargeList:any ;
  mytype:any
  income:any;
  charge:any;
  all:any = false;
  total: any =0;
  money: any =''
  moneyy : any = ''
  sum:any
  show = false;
  i:any=0;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public moneyProvide : MoneyserviceProvider,
    public chargeProvide : ChargeserviceProvider,
    public loadingCtrl : LoadingController) {
      this.charge = 0;
      this.income = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmoneyPage');
    this.moneyData();
    this.chargeData();
    this.charge = 0;
      this.income = 0;
 
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

  type(){
    console.log("mytype",this.mytype)
    if(this.mytype == 'all'){
      
      console.log("รายจ่าย")
      this.income = true
      this.charge = true;
     // console.log("data = ",this.moneyList)
      var data = this.moneyList
      var tmp = [];
      for(var i = 0 ; i<data.length ; i++){
        if(data[i].type = 'รายรับ'){
          tmp.push(data[i].date)
        if(data[i].date == tmp[i]){
          console.log("data type = ",data)
        }
      }
    }
    console.log("tmp = ",tmp)
  }
    if(this.mytype == 'income'){
      console.log("รายรับ")
      this.income = true
      this.charge = false;
    }
    if(this.mytype == 'charge'){
      console.log("รายจ่าย")
      this.income = false
      this.charge = true
    }
  }

  chargeData(){
   
    this.chargeProvide.getCharge().subscribe(data=>{
      this.chargeList = data
      console.log("get charge = ",data)
      
    })
  } 

  money2(){
    this.navCtrl.setRoot(MoneyPage)
  }

  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }

  gotoCount(){
    this.navCtrl.setRoot(CountPage)
  } 
  
  sumData(){
    this.show = true;
    this.moneyProvide.getMoneyy().subscribe(data=>{
      // var income = 0;
      var charge = 0;
      //var sum = 0;
    
     for(var i = 0 ; i<data.length ; i++){
      //   if(data[i].type == 'รายรับ'){
      //     income = income + parseInt(data[i].moneyy)
      //   }else 
        
        if(data[i].type == 'รายจ่าย'){
          charge = charge + parseInt(data[i].moneyy)
        } 
            
        // this.income = income
        this.charge = charge
        console.log(data);
        // console.log("รายรับ = ",income);
        console.log("รายจ่าย = ",charge);
      
      
      //console.log("sum = ",this.sum)
      }
  }) 

    }

PlusData(){
  this.show = true;
    this.moneyProvide.getMoneyy().subscribe(data=>{
      var income = 0;
    
    
     for(var i = 0 ; i<data.length ; i++){
     
        if(data[i].type == 'รายรับ'){
          income = income + parseInt(data[i].moneyy)
        } 
        this.income = income
        
     console.log(data);
      console.log("รายรับ = ",income);
      }
  }) 

    }

}
