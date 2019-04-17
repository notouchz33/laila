import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';

/*
  Generated class for the GradeserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GradeserviceProvider {


  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello GradeserviceProvider Provider');
  }

  
  doGrade(subject,cradit,grade){
    
    var url = this.global.baseURLAPI+"grade.php"
    let body = new FormData();


    body.append('cradit',cradit);
    body.append('grade',grade);
    body.append('subject',subject);

    var response = this.http.post(url,body) .map((response:Response)=> response.json());
    return response;
}

// getMemo(){  
//   return this.http.get(this.global.baseURLAPI+"getmemo.php")
//         .map((response:Response)=> response.json());
// }

    getGrade(term,year){
  
      var url = this.global.baseURLAPI+"getgpax.php"
      let body = new FormData();
  
      body.append('year',year);
      body.append('term',term);
  
      var response = this.http.post(url,body).map((response:Response)=> response.json());
      return response;
    }

    // getA(cradit,grade){
    //   var url =this.global.baseURLAPI+"geta.php"
    //   let body = new FormData();
  
    //   body.append('cradit',cradit);
    //   body.append('grade',grade);
  
    //   var response = this.http.post(url,body) .map((response:Response)=> response.json());
    //   return response;

    // }


}
