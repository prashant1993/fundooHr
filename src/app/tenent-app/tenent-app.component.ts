import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tenent-app',
  templateUrl: './tenent-app.component.html',
  styleUrls: ['./tenent-app.component.css']
})
export class TenentAppComponent implements OnInit {

  constructor() { }
  registerUser(value: NgForm) {
   console.log(value);
   // {email: '...', password: '...'}
   // ... <-- now use JSON.stringify() to convert form values to json.
 }
  ngOnInit() {
  }



}
