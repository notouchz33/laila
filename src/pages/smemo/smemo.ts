import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { MemoserviceProvider } from '../../providers/memoservice/memoservice';
import { IndexPage } from '../index';
import { MemoPage } from '../memo/memo';
//import { Jsonp } from '@angular/http';
//import { MbscEventcalendarOptions } from '@mobiscroll/angular';

/**
 * Generated class for the SmemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-smemo',
  templateUrl: 'smemo.html',
})
export class SmemoPage {

  events: any;
  memoList:any; 

  constructor(public navCtrl: NavController,
    public loadingCtrl : LoadingController, 
     public navParams: NavParams,
     public memoProvide : MemoserviceProvider,
     ) {
  }


//   ngOnInit() {
//     this.jsonp.request('https://trial.mobiscroll.com/events/?callback=JSONP_CALLBACK').subscribe((res: any) => {
//         this.events = res._body;
//     });
// }

// eventSettings: MbscEventcalendarOption= {
//     lang: 'th',
//     //theme: 'ios',
//     display: 'inline',
//     view: {
//         calendar: { type: 'month' },
//         eventList: { type: 'month' }
//     }
// };

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmemoPage');
    this.memoData();
  }

 memoData(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
    });

    loading.present();
    this.memoProvide.getMemo().subscribe(data=>{
       // console.log("date = "+data[0].date)
        this.memoList = data
        console.log("memoList = ",data)
        loading.dismiss();
        
    })
  
  } 

  
  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }

  gotoMemo(){
    this.navCtrl.setRoot(MemoPage)
  }


}
 