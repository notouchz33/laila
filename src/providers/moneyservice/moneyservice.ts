import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';

/*
  Generated class for the MoneyserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoneyserviceProvider {
  income:any
  money:any
  charge: any
  moneyy:any 

  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello MoneyserviceProvider Provider');
  }

  doMoney(date,type,moneyy,detail){
    console.log("date2 = ",date)
    var url = this.global.baseURLAPI+"money.php";
    let body = new FormData();
   
    body.append('date',date);
    body.append('moneyy',moneyy);
    body.append('detail',detail);
    body.append('type',type);

    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}

getMoney(){  
              return this.http.get(this.global.baseURLAPI+"getmoney.php")
              .map((response:Response)=> response.json());
}

getallMoney(sdate){  
         console.log("date2 = ",sdate)
        var url = this.global.baseURLAPI+"getallmoney.php";
        let body = new FormData();
       
        body.append('sdate',sdate);
    
        var response = this.http.post(url,body).map(res=>res.json());
        return response ; 
}

getMoneyy(){
  // console.log("money = ",money)
  // console.log("moneyy = ",moneyy)
  var url = this.global.baseURLAPI+"getsum.php";
  let body = new FormData();
 
//body.append('money',money);
   //body.append('money1',money1);

  var response = this.http.post(url,body).map(res=>res.json());
  return response ; 

}

}
 