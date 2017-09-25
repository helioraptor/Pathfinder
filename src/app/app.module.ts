import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserComponent } from './browser/browser.component';
import {HttpService} from './http.service';
import {Http, HttpModule} from '@angular/http';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, NgxPaginationModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
