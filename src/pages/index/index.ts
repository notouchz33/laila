import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentPage } from '../student/student';
import { ExamPage } from '../exam/exam';
import { MoneyPage } from '../money/money';
import { MemoPage } from '../memo/memo';
import { GradePage } from '../grade/grade';
//import { AccountPage } from '../account/account';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  gotoStudent() {
    this.navCtrl.push(StudentPage);
  }

  gotoExam() {
    this.navCtrl.push(ExamPage);
  }

  gotoMoney() {
    this.navCtrl.setRoot(MoneyPage);
  }

  gotoGrade() {
    this.navCtrl.push(GradePage);
  }
  gotoMemo() {
    this.navCtrl.setRoot(MemoPage);
  }


}
