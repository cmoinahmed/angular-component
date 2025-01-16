import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      serverName: 'Testserver',
      serverContent: 'Just a test',
      status: 'active'
    },
    {
      serverName: 'Testserver 2',
      serverContent: 'Just a test 2',
      status: 'critical'
    },
    {
      serverName: 'Testserver 3',
      serverContent: 'Just a test 3',
      status: 'inactive'
    }
  ];
}