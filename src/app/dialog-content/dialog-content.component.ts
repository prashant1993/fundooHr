import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, NgForm} from '@angular/forms';
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements onInit {

//when template get initial or any of event get called
  ngOnInit() {
    console.log("started application");
  }

  //to create instance of dialog model for close
     constructor(
       public dialogRef: MatDialogRef<DialogContentComponent>,
       @Inject(MAT_DIALOG_DATA) public data: any) {
       console.log("constructor called")
      }

      //function for close dialog box
    onNoClick(): void {
      this.dialogRef.close();
    }

    //function to get form data into ts
    registerUser(value: NgForm) {
    console.log(value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
    }





}
