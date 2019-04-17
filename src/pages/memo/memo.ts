import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { IndexPage } from '../index';
import { SmemoPage } from '../smemo/smemo';
import 'rxjs/add/operator/map';
import { MemoserviceProvider } from '../../providers/memoservice/memoservice';


/**
 * Generated class for the MemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo.html',
})
export class MemoPage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
     public navParams: NavParams,
     public memoProvide : MemoserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoPage');
  }
  
  gotoIndex() {
    this.navCtrl.setRoot(IndexPage);
  }
  gotoMemo() {
    this.navCtrl.setRoot(MemoPage);
  }
  gotoSmemo() {
    this.navCtrl.setRoot(SmemoPage);
  }

  memo(date,type,detail){
      this.memoProvide.doMemo(date,type,detail).subscribe(data=>{
      console.log("status = "+data.status)  
      if(data.status == "success"){
           let alert = this.alertCtrl.create({
            title: 'บันทึกช่วยจำ',
            subTitle: 'เพิ่มข้อมูล',
            buttons: [{
              text: 'ตกลง',
              handler: data=>{
                this.navCtrl.setRoot(MemoPage);
              } 
            }]
          });
          alert.present(); 
      }
  })
 
  }


  
  }



