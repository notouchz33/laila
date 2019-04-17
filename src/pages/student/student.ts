import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import { SstudentPage } from '../sstudent/sstudent';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { StudentserviceProvider} from '../../providers/studentservice/studentservice';
 
/** 
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage { 
  orderform: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
     public navParams: NavParams,
     public studentProvide : StudentserviceProvider) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }
  
    student(year,term,time1,time2,dayy,idsub,subject,room,teacher){
        this.studentProvide.doStudent(year,term,time1,time2,dayy,idsub,subject,room,teacher).subscribe(data=>{
        console.log("status = "+data.status)  
        if(data.status == "success"){
            let alert = this.alertCtrl.create({
              title: 'ตารางเรียน',
              subTitle: 'เพิ่มข้อมูล',
              buttons: [{
                text: 'ตกลง',
                handler: data=>{
                  this.navCtrl.setRoot(StudentPage);
                } 
              }]
            });
            alert.present();
        }
    })
   
    } 
    
    student2(){
      this.navCtrl.setRoot(SstudentPage)
    }
}
  

 