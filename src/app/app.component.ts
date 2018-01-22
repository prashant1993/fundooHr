import { Component} from '@angular/core';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ModelComponent } from './model/model.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog,dialogsmall: MatDialog) {}
  dialogResult='';

  ngOnInit() {
    console.log("called init");
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogContentComponent, {
      width: '450px',
      height:'400px'
    });
      console.log("The dialog content was open");
      }

    newdialog():void{
        let dialogRef = this.dialog.open(ModelComponent, {
        width: '220px'
      });
      console.log("The model dialog was open");
    }

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log(`Dialog closed: ${result}`);
    // this.dialogResult => result;
    // console.log(this.dialogResult);
    // });

}
