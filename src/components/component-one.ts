import { Component } from '@angular/core';

@Component({
  selector: 'component-one',
  template: `
  <div>Component One</div>
  `
})
export class ComponentOne {

  constructor() {
  }

  ionViewDidEnter() {
    console.log('the cat jumps high');
  }
}
