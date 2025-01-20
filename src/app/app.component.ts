import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gameNumbers: number[] = [];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(number: number) {
    this.gameNumbers.push(number);
    if(number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
