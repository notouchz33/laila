import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { MoneyserviceProvider } from '../../providers/moneyservice/moneyservice';
// import { MoneyPage } from '../money/money';
import { ExamserviceProvider } from '../../providers/examservice/examservice';
import { ExamPage } from '../exam/exam';
import { IndexPage } from '../index';


/**
 * Generated class for the SexamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sexam',
  templateUrl: 'sexam.html',
})
export class SexamPage { 
  examList:any;
  day:any = false;
  mytype:any;
  week:any = false;
  NULL:any;
  a:any =false;
  b:any =false;
  c:any =false;
  d:any =false;
  e:any =false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public examProvide : ExamserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexamPage');
    // console.log("day = ",this.day)
    // this.examData();
  }

  exam(){
    this.navCtrl.setRoot(ExamPage)
  }

  gotoIndex(){
    this.navCtrl.push(IndexPage)
  } 

  dayChang(){
    console.log("day = ",this.day)
  }

  examData(){
    console.log("day = ",this.day)
    this.examProvide.getExam(this.day).subscribe(data=>{
      console.log(data)
      this.examList = data
    })
  }

  // weekAll(){
  //   console.log("day = ",this.day)
  //  this.examProvide.getallExam(this.week).subscribe(data=>{
  //    console.log(data)
  //    this.examList = data[0];
    
  //  })
 //}


  type(){
    console.log("mytype",this.mytype)
    if(this.mytype == 'day'){
      console.log("รายวัน")
      this.day = true;
      this.week= false;
      this.examList = ["0"];
    }
    else if(this.mytype == 'week'){
      console.log("สัปดาห์")

       this.examProvide.getallExam().subscribe(data=>{
         console.log(data);

       this.examList = data;
      this.week = true;
        this.day = false;
       
        console.log("week = ",this.week)
        if(data.day == '1'){
          this.a = true;
          this.b =false;
          this.c =false;
          this.d =false;
          this.e =false;
        }else if(data.day == '2'){
         this.b = true;
        }else if(data.day == '3'){
          this.c = true;
         }else if(data.day == '4'){
          this.d = true;
         }else(data.day == '5')
         {
           this.e = true;
         }
       
        
      })

    

}
  }
}