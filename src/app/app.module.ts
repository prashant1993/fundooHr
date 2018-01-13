import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormControl, Validators} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TenentAppComponent } from './tenent-app/tenent-app.component';
import { RouterModule,Route} from '@angular/router';
import { CardsComponent } from './cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenentAppComponent,
    CardsComponent
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
    MatFormFieldModule
    ,FlexLayoutModule,
    RouterModule.forRoot([
      {path:"Login",component:LoginComponent},
      {path:"TenentApp",component:TenentAppComponent},
        {path:"cards",component:CardsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
