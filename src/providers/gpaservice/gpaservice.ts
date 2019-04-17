import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';

/*
  Generated class for the GpaserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GpaserviceProvider {

  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello GpaserviceProvider Provider');
  }
  
  doGpa(cradit,score){
    
    var url = this.global.baseURLAPI+"gpa.php"
    let body = new FormData();

    body.append('cradit',cradit);
    body.append('score',score);

    var response = this.http.post(url,body) .map((response:Response)=> response.json());
    return this.http.get(this.global.baseURLAPI+"getgpa.php")
}

}
