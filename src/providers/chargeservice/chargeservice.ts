import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';

/*
  Generated class for the ChargeserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChargeserviceProvider { 

  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello ChargeserviceProvider Provider');
  }

  doCharge(date,type,moneyy,detail){
    
    var url = this.global.baseURLAPI+"charge.php";
    let body = new FormData();

    body.append('date',date);
    body.append('moneyy',moneyy);
    body.append('detail',detail); 
    body.append('type',type);

    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}
 
getCharge(){ 
     return this.http.get(this.global.baseURLAPI+"getcharge.php")
      .map((response:Response)=> response.json());
      }

}
