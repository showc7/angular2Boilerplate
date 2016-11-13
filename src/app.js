//import 'zone/lib/zone.js';
import { Component } from 'angular2/core';
import { Header } from './header.js';

@Component({
  selector: 'my-app',
  template: `
    <my-header></my-header>
    <h1>Welcome to your Angular2 + Webpack + ES6 Playground</h1>
    <h2>Have {{ what }}</h2>
  `
})
export default class App {
  constructor() {
    this.what = "a good time!";
  }
};
