import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { IndexPage } from '../index';
import { StudentPage } from '../student/student';
import { StudentserviceProvider } from '../../providers/studentservice/studentservice';
import { analyzeAndValidateNgModules } from '@angular/compiler';
//import { type } from 'os';

/**
 * Generated class for the SstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sstudent',
  templateUrl: 'sstudent.html',
})
export class SstudentPage {
  studentList:any;
  day:any =false;
  mytype:any;
  week:any = false;
  NULL:any;
  data:any
  i:any = 0;
  a:any =false;
  b:any =false;
  c:any =false;
  d:any =false;
  e:any =false;
  dayy:Array<{day:any}> = [];
  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl : LoadingController,
     public studentProvide : StudentserviceProvider) {
       this.dayy.push({day:'1'});
       this.dayy.push({day:'2'});
       this.dayy.push({day:'3'});
       this.dayy.push({day:'4'});
       this.dayy.push({day:'5'});
  }

  ionViewDidLoad() {
 
//   if (type() == this.NULL) {
console.log('ionViewDidLoad SstudentPage')
//   }else{
//     console.log("day = ",this.day)
//     this.studentData();
//       //this.gotoMonday();
//   }
//   // 

  }
  

  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }
  gotoStudent() {
    this.navCtrl.setRoot(StudentPage);
  }
  gotoSstudent(){
    this.navCtrl.setRoot(SstudentPage)
  }

  dayChang(){
    console.log("day = ",this.day)
  }

  studentData(){
    console.log("day = ",this.day)
    this.studentProvide.getStudent(this.day).subscribe(data=>{
      console.log(data)
      this.studentList = data
    })
  }

  // weekAll(){
  //    console.log("day = ",this.day)
  //   this.studentProvide.getallStudent().subscribe(data=>{
  //     console.log(data)
  //     this.studentList = data[0];
     
  //   })
  // }
 
  type(){
    console.log("mytype",this.mytype)
    if(this.mytype == 'day'){
      console.log("รายวัน")
      this.day = true;
      this.week= false;
      this.studentList = ["0"];
    }
    else if(this.mytype == 'week'){
      console.log("สัปดาห์")

       this.studentProvide.getallStudent().subscribe(data=>{
        console.log(data);
        
      this.week = true;
      this.day = false;
      this.studentList = data;
      // data[0].day=1;
      // data[1].day=2;
      // data[2].day=3;
      // data[3].day=4;
      // data[4].day=5;

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
      

  
 // dayy=
}
