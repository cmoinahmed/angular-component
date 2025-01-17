import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      serverName: 'Test Server',
      serverContent: 'Test Server Content',
      serverStatus: 'active',
    },
  ];

  onServerAdded(serverData: {
    serverName: string;
    serverContent: string;
    serverStatus: string;
  }) {
    this.serverElements.push({
      serverName: serverData.serverName,
      serverContent: serverData.serverContent,
      serverStatus: serverData.serverStatus,
    });
  }
}
