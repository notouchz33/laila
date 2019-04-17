import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http , Response } from '@angular/http';
import { GlobalvarProvider } from '../globalvar/globalvar';

 

 
/*
  Generated class for the ExamserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExamserviceProvider {

  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello ExamserviceProvider Provider');
  }

  doExam(year,term,time1,time2,day,idsub,subject,room){
    //var url = "https://a24f251f.ngrok.io/namaetoDB/CustApp/register.php";
    var url = this.global.baseURLAPI+"exam.php";
    let body = new FormData();

    body.append('year',year);
    body.append('term',term);
    body.append('time1',time1);
    body.append('time2',time2);
    body.append('day',day);
    body.append('idsub',idsub);
    body.append('subject',subject);
    body.append('room',room);
  
    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}

getExam(day){  
  // return this.http.get(this.global.baseURLAPI+"getexam.php")
  //       .map((response:Response)=> response.json());

        var url = this.global.baseURLAPI+"getexam.php";
        let body = new FormData();
    
        body.append('day',day);
        
        var response = this.http.post(url,body).map(res=>res.json());
        return response ;
}

getallExam(){

  return this.http.get(this.global.baseURLAPI+"getallexam.php")
  .map((response:Response)=> response.json());
}

}