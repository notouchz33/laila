import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { GpaPage } from '../gpa/gpa';
import { IndexPage } from '../index';
import { GradeserviceProvider } from '../../providers/gradeservice/gradeservice'

/**
 * Generated class for the GpaxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gpax',
  templateUrl: 'gpax.html',
})
export class GpaxPage {
  term:any;
  year:any;
  subjectList:any;
  cradit:any = [];
  grade:any = [];
  myGrade:any = 0.0;
  subject:any;
  aList:any;
 


  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams, 
    public gprovide: GradeserviceProvider) {
    this.term = this.navParams.get('term');
    this.year = this.navParams.get('year');
    // this.cradit = this.navParams.get('cradit');
    // this.grade = this.navParams.get('grade');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpaxPage');
    this.gprovide.getGrade(this.term,this.year).subscribe(
      data => {
        this.subjectList = data;
        for(var i=0 ; i< data.length ; i++){
        console.log("subject = ",data[i].subject)
        this.subject = data.subject;
        }

      console.log(data);
    }
    )
  }

  gotoGpa(){
    this.navCtrl.setRoot(GpaPage)
  }

  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }

  mygrade(cradit,grade){
    console.log("credit = ",this.cradit)
    var subject;
    var cradit2;
    var grade2;
    this.gprovide.getGrade(this.term,this.year).subscribe(data=>{
      for(var i=0 ; i< data.length ; i++)
      {
          subject = data[i].subject;
          cradit2 = cradit[i];
          grade2 = grade[i];
          this.gprovide.doGrade(subject,cradit2,grade2).subscribe(data=>{

          })
      }
     
    })
   
    

    var cradit_sum = 0; 
    var sum_cradit = sumCradit(cradit);
    var multi_grade = multiGrade(cradit,grade);

    var get_grade = getGrade(sum_cradit,multi_grade)
    this.myGrade = get_grade.toFixed(2);
    
    // let alert = this.alertCtrl.create({
    //   title: 'ผลการเรียน',
    //   subTitle: 'รายเทอม =      '+this.myGrade.toFixed(2),
      
    //   buttons: ['ตกลง']
    // });

    // alert.present();

    function sumCradit(cradit){
      var getCradit = [];
      for(var i= 0 ; i < cradit.length ; i++){
        getCradit[i] = parseFloat(cradit[i])
        cradit_sum = cradit_sum + getCradit[i];             ////// เอาหน่วยกิตมารวมกัน = cradit_sum
      }
      console.log("multi_grade func = ",cradit_sum)
      return cradit_sum;
    }

    function multiGrade(cradit,grade){
      var mygrade = []
      var multi_grade = 0;
      var add_grade = 0 ;
      for(var i = 0 ; i<grade.length ; i++){             
          mygrade[i] = parseFloat(grade);                
          multi_grade = cradit[i] * grade[i];           ///เกรดคูณหน่วยกิต เอาผลรวม = multi_grade
          add_grade = add_grade + multi_grade;  


      }
      return add_grade;
    }

    function getGrade(scradit,mgrade){
      console.log("scradit = ",scradit)
      console.log("mgrade = ",mgrade)
        var getgrade = mgrade/scradit;           /// cradit_sum / multi_grade= getgrade
        return getgrade; 
    }
    // console.log("cradit = ",cradit)
    // console.log("grade = ",grade)

  }
   
  
  // getA(cradit,grade){
  //   this.gprovide.getA(this.cradit,this.grade).subscribe(
  //     data => {
  //       this.aList = data;
  //       for(var i=0 ; i< data.length ; i++){
  //       console.log("subject = ",data[i].subject)
  //       this.subject = data.subject;
  //       }

  //     console.log(data);
  //   }
  //   )
  // }
  
}
