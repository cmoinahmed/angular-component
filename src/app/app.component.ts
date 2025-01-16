import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [
    { newServerName: 'TestServer', newServerContent: 'Test Content', newServerStatus: 'active' }
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string; serverStatus: string }) {
    this.serverElements.push({
      newServerName: serverData.serverName,
      newServerContent: serverData.serverContent,
      newServerStatus: serverData.serverStatus
    });     
  }
}