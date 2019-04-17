import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import { SmoneyPage } from '../smoney/smoney';
import { MoneyPage } from '../money/money';
import { CountPage } from '../count/count';
import { Chart} from 'chart.js'
import { MoneyserviceProvider } from '../../providers/moneyservice/moneyservice';
import { ChargeserviceProvider } from '../../providers/chargeservice/chargeservice';

/**
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  moneyList:any = false;
  chargeList:any =false;
  mytype:any
  income:any ;
  charge:any ;  
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

  graph(i,c){
    console.log("g incom = ",this.income)
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
      type: 'bar',
      data: {
          labels: ["รายรับ", "รายจ่าย"],
          datasets: [{
              label: 'รายรับ รายจ่าย',
              data: [i,c],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'

              ],
              borderColor: [ 
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)'
                  
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphPage');

    this.moneyy = this.navParams.get('money');
    this.graph(0,0);
   
    
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

mydate(sdate){
  console.log(sdate)
  this.moneyProvide.getallMoney(sdate).subscribe(data=>{
    if(data == 0){
      let alert = this.alertCtrl.create({
        title: 'ไม่พบข้อมูล',
        subTitle: "วันที่ "+sdate,
        
        buttons: ['ตกลง']
      });

      alert.present();
    }else{
    console.log("data = ",data)
    var income = 0;
    var charge = 0;

    for(var i = 0 ; i<data.length ; i++){
      if(data[i].date == sdate){
        if(data[i].type == 'รายรับ'){
          income = data[i].moneyy;
        }else  if(data[i].type == 'รายจ่าย'){
          charge = data[i].moneyy;
        }
      }
      this.graph(income,charge);
    }
    // for(var i = 0 ; i<data.length ; i++){
    //   console.log("dateku = ",data[i].date)
    //   if(data[i].date == sdate){
    //     console.log("dateku2 = ",data[i].date)
    //     if(data[i].type == 'รายรับ'){
    //       income = data[i].moneyy;
    //     }else  if(data[i].type == 'รายจ่าย'){
    //       charge = data[i].moneyy;
    //     }
        // income = income + parseInt(data[i].moneyy)
        // console.log("incomeku = ",income)
        // console.log("chargeku = ",charge)
        // charge = charge + parseInt(data[i].moneyy)
        // console.log("incomku = ",data[i].incom)
 
    //   }

    // } 
  // return  this.income ,this.charge 
      
}
})
}


  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }
 
  gotoSmoney(){
    this.navCtrl.push(SmoneyPage)
  }

  gotoGraph(){
    this.navCtrl.push(GraphPage)
  }

  gotoCount(){
    this.navCtrl.push(CountPage)
  }
  
  gotoMoney(){
    this.navCtrl.push(MoneyPage)
  }



}
