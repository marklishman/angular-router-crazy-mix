import { Component } from '@angular/core';

@Component({
  template: `
    <div class="darker-green">
      <h1>Spades</h1>
      <p class="suit">
        <span [innerHTML]="'&spades;'"></span>
        <span class="red" [innerHTML]="'&spades;'"></span>
      </p>
    </div>`
})
export class SpadeComponent {
}
