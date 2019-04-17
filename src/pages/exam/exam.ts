import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import { SexamPage } from '../sexam/sexam';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ExamserviceProvider} from '../../providers/examservice/examservice' 


/** 
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public examProvide : ExamserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamPage');
  }
  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }
  gotoExam() {
    this.navCtrl.setRoot(ExamPage);
  }
  gotoSexam() {
    this.navCtrl.setRoot(SexamPage);  
  }

  exam(year,term,time1,time2,day,idsub,subject,room){
    this.examProvide.doExam(year,term,time1,time2,day,idsub,subject,room).subscribe(data=>{
    console.log("status = "+data.status)
    if(data.status == "success"){
        let alert = this.alertCtrl.create({
          title: 'ตารางสอบ',
          subTitle: 'เพิ่มข้อมูล',
          buttons: [{
            text: 'ตกลง',
            handler: data=>{
              this.navCtrl.setRoot(ExamPage);
            }
          }]
        });
        alert.present();
    }
})
}


}
