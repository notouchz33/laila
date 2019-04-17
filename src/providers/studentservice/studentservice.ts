import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';
 
/*
  Generated class for the StudentserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentserviceProvider {
 
  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello StudentserviceProvider Provider');
  } 
  
  doStudent(year,term,time1,time2,day,idsub,subject,room,teacher){
    
    var url = this.global.baseURLAPI+"student.php";
    let body = new FormData();

    body.append('year',year);
    body.append('term',term); 
    body.append('time1',time1);
    body.append('time2',time2);
    body.append('day',day);
    body.append('idsub',idsub); 
    body.append('subject',subject);
    body.append('room',room);
    body.append('teacher',teacher);
    
    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}

getStudent(day){  
  // return this.http.get(this.global.baseURLAPI+"getstudent.php")
  //       .map((response:Response)=> response.json());

        var url = this.global.baseURLAPI+"getstudent.php";
        let body = new FormData();
    
        body.append('day',day);
        
        var response = this.http.post(url,body).map(res=>res.json());
        return response ;
}

getallStudent(){

  return this.http.get(this.global.baseURLAPI+"getallstudent.php")
  .map((response:Response)=> response.json());
  
  // var url = this.global.baseURLAPI+"getallstudent.php";
  // let body = new FormData();

  // body.append('day',day);
  
  // var response = this.http.post(url,body).map(res=>res.json());
  // return response ;
}
}
