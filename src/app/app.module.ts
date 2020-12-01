import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AddPopupComponent } from './add-popup/add-popup.component';
import {HttpService} from './utils/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    AddPopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  entryComponents: [AddPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
