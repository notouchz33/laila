import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { GpaPage } from '../gpa/gpa';
import { IndexPage } from '../index';
import 'rxjs/add/operator/map';
import { StudentserviceProvider } from '../../providers/studentservice/studentservice'
import { GradeserviceProvider } from '../../providers/gradeservice/gradeservice';
import { GpaxPage } from '../gpax/gpax';

/**
 * Generated class for the GradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grade', 
  templateUrl: 'grade.html',
})
export class GradePage {
  subjectList:any
  cradit = [];
  grade = [];
  myGrade:any
  term:any
  year:any

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public stdService: StudentserviceProvider,
    public gradeProvide : GradeserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradePage');
    this.getSubject();
  }

  gotoGrade(){
    this.navCtrl.setRoot(GradePage)
  }
  
  gotoGpa(){
    this.navCtrl.setRoot(GpaPage)
  }
  
  gotoIndex(){
    this.navCtrl.setRoot(IndexPage)
  }

  gotoGpax(year,term){
    console.log("Year = ",year)
    console.log("term = ",term)
    this.gradeProvide.getGrade(year,term).subscribe(data=>{
  
      // if(data.status == 'fail'){
      //   console.log(data);
      //   let alert = this.alertCtrl.create({
      //     title: 'warning!!',
      //     subTitle: "ไม่มีข้อมูลที่ค้นหา",
          
      //     buttons: ['ตกลง']
      //   });

      //   alert.present();
      // }else{
        this.navCtrl.push(GpaxPage,{year:year,term:term});
      // }
      
    })

  
  }
 
  getSubject(){
    this.stdService.getallStudent().subscribe(data=>{
        this.subjectList = data;
    })
  }

  // getGrade(grade){
  //     console.log("grade = ",grade)
  // }


  mygrade(year,term,cradit,grade){

    var cradit_sum = 0; 
 
    
    var sum_cradit = sumCradit(cradit);
    var multi_grade = multiGrade(cradit,grade);

    var get_grade = getGrade(sum_cradit,multi_grade)
    this.myGrade = get_grade;
    
    let alert = this.alertCtrl.create({
      title: 'ผลการเรียน',
      subTitle: 'รายเทอม =      '+this.myGrade.toFixed(2),
      
      buttons: ['ตกลง']
    });

    alert.present();

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
  
   
  //  console.log("cradit = ",cradit)
  //    console.log("grade = ",grade)

}


  
}
