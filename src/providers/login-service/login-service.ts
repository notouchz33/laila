import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';
 
/*  
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http,
    public global: GlobalvarProvider) { 
    console.log('Hello LoginServiceProvider Provider');
  }

  doLogin(username,password){
    //var url = "https://514d472c.ngrok.io/namaetoDB/CustApp/login2.php";
    //var tel_data = tel
    var url = this.global.baseURLAPI+"login.php";
    let body = new FormData();
    body.append('username',username);
    body.append('password',password);
    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}


}


