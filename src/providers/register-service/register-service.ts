import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';
/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {
 
  constructor(public http: Http,
    public global: GlobalvarProvider) { 
    console.log('Hello RegisterServiceProvider Provider');
  }

  doRegister(name,surname,myclass,user,pass){
    //var url = "https://a24f251f.ngrok.io/namaetoDB/CustApp/register.php";
    var url = this.global.baseURLAPI+"register.php";
    let body = new FormData();

    body.append('name',name);
    body.append('surname',surname);
    body.append('class',myclass);
    body.append('username',user);
    body.append('password',pass);
    

    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}
 

}
