import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  urlDefault: string = "api";

  constructor(public http: HttpClient) {
    console.log('Provider');
  }

  getAPI(url){

    console.log(this.urlDefault + url);
    
    return this.http.get<any>(this.urlDefault + url);

  }

}
