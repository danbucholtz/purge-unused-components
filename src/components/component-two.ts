import { Component } from '@angular/core';

@Component({
  selector: 'component-two',
  template: `
  <div>Component Two</div>
  `
})
export class ComponentTwo {

  constructor() {
  }

  ionViewDidEnter() {
    console.log('the cat jumps high 2');
  }
}
