import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataService {
  myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

public
    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

        //method to get data from the component
        myMethod(data) {
        console.log(data.email);
        console.log(typeof(data));
        if(typeof(data)=="object")
        {
          //set data in object form
          let newdata = JSON.stringify(data);
          console.log("new data",newdata);
          localStorage.setItem('data', newdata);
          } else {
            //set single data
          localStorage.setItem('data', newdata);
        }
    }

    //function for get data from localstorage
    getData:void() {
     let getdata = localStorage.getItem('data');
     console.log("getdata",getData);
     }

     getData();
}
