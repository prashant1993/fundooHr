import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
   console.log(form.value);
   // {email: '...', password: '...'}
   // ... <-- now use JSON.stringify() to convert form values to json.
 }
}
