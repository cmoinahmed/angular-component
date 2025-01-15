import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  newServer = false;
  serverName = '';
  buttonStatus = false;
  servers: string[] = []; // Array to hold the list of servers

  constructor() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 5000);
  }

  createServer() {
    if (this.serverName.trim() === '') {
      alert('Please enter a server name!');
      return;
    }
    this.newServer = true; // Set the flag to indicate a server was created
    this.servers.push(this.serverName); // Add the server to the array
    alert(`Server "${this.serverName}" was created!`);
    this.serverName = ''; // Reset the input field
  }
}
