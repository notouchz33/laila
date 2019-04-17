import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { GradePage } from '../grade/grade';
import { IndexPage } from '../index';
import { GpaserviceProvider } from '../../providers/gpaservice/gpaservice';
import { StudentserviceProvider } from '../../providers/studentservice/studentservice';

/**
 * Generated class for the GpaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gpa',
  templateUrl: 'gpa.html',
})
export class GpaPage {
  myGrade:any;
  stdList:any;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,  
     public alertCtrl: AlertController,
     public gpaProvide : GpaserviceProvider,
     public stdService: StudentserviceProvider) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpaPage');
    this.stdService.getallStudent().subscribe(data=>{
      console.log("student = ",data)
      this.stdList = data;
    })
    
  }
  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }
  gotoGrade(){
    this.navCtrl.setRoot(GradePage)
  }
  gotoGpa(){
    this.navCtrl.setRoot(GpaPage)
  }


  mygrade(cradit,score){

    var grade = total(cradit,score)
    this.myGrade = grade

    let alert = this.alertCtrl.create({
      title: 'ผลการเรียน',
      subTitle: 'เกรดเฉลี่ย =           '+this.myGrade.toFixed(2),
      buttons: ['ตกลง']
    });

    alert.present();

    function total(cradit,score){
      var total = 0;
      total = score/cradit;
      console.log("total = ",total)
      return total;
    }

     
    

  //  console.log("cradit = ",cradit)
  //    console.log("grade = ",grade)

}
}
