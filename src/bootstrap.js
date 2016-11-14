/*
import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import App from './app/app.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Content from './content/content.js';

document.addEventListener('DOMContentLoaded', function(){


  bootstrap(Header).catch(err => console.log(err));
  bootstrap(Content).catch(err => console.log(err));
  bootstrap(Footer).catch(err => console.log(err));

  bootstrap(App).catch(err => console.log(err));
});
*/
import 'reflect-metadata';
import { NgModule } from 'angular2/core';
import { BrowserModule } from 'angular2/platform/browser';
import { App }   from './app/app.js';

console.log(NgModule);

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ App ],
  bootstrap:    [ App ]
})

export class AppModule { }
