import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App }   from './app/app.js';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ App ],
  bootstrap:    [ App ]
})

export class AppModule { }
