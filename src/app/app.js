//import 'zone/lib/zone.js';
import { Component } from 'angular2/core';
import { Header } from '../header/header.js';
import { Content } from '../content/content.js';
import { Footer } from '../footer/footer.js';

//import './app.css';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css']
})

export default class App {
  constructor() {

  }
};
