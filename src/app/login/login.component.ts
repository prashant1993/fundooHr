import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html' ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 ngOnInit() {
 }

 //calling sevice for send data
 public constructor(private myService: DataService) { }
   registerUser(value: NgForm) {
    console.log(value);
      //send data to the service
       this.myService.myMethod(value);
   }

}
