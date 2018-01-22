import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<ModelComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

      //when template get initial or any of event get called
      ngOnInit() {
      }

//function for close dialog
    onNoClick(): void {
      this.dialogRef.close();
    }

//get form data into ts
    registerUser(value: NgForm) {
     console.log(value);
     // {email: '...', password: '...'}
     // ... <-- now use JSON.stringify() to convert form values to json.
   }
  }
