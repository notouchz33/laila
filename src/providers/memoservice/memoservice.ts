import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalvarProvider } from '../globalvar/globalvar';

/*
  Generated class for the MemoserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoserviceProvider {

  constructor(public http: Http,
    public global: GlobalvarProvider) {
    console.log('Hello MemoserviceProvider Provider');
  }

  doMemo(date,type,detail){
    
    var url = this.global.baseURLAPI+"memo.php"
    let body = new FormData();

    body.append('date',date);
    body.append('type',type);
    body.append('detail',detail);
  
    
    var response = this.http.post(url,body).map(res=>res.json());
    return response ;
}

getMemo(){  
  return this.http.get(this.global.baseURLAPI+"getmemo.php")
        .map((response:Response)=> response.json());
}
}
