import { Component } from 'angular2/core';

import './content.css';

@Component({
  selector: 'my-content',
  moduleId: module.id,
  templateUrl: 'content/content.html'
})

export default class Content {
  constructor() {
    this.what = "a good time!";
  }
};
