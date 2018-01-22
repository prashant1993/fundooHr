import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FormControl, Validators} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from "@angular/flex-layout";
// import {MatDialog} from '@angular/material';
import { RouterModule,Route} from '@angular/router';
import {MatDialogModule} from '@angular/material';
//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TenentAppComponent } from './tenent-app/tenent-app.component';
import { CardsComponent } from './cards/cards.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ModelComponent } from './model/model.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenentAppComponent,
    CardsComponent,
    DialogContentComponent,
    ModelComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule,
    // MatDialog,
    RouterModule.forRoot([
    {path:"",component:AppComponent},
      {path:"Login",component:LoginComponent},
      {path:"TenentApp",component:TenentAppComponent},
      {path:"cards",component:CardsComponent},
      {path:"model",component:ModelComponent}
    ])
  ],
  entryComponents: [
      DialogContentComponent,ModelComponent
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
