import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarProvider {

   //for Dev
   baseURLAPI:string = "http://192.168.2.156/";
   baseURLimg:string = "http://192.168.2.156/images/";

  constructor() {
  }

}
