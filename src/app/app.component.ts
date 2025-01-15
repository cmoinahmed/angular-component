import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPassword = false;
  log = [];

  dispalyDetails() {
    this.secretPassword = !this.secretPassword;
    this.log.push(new Date());
  }

}
