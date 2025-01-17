import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  @Input('server') element: {
    serverName: string;
    serverContent: string;
    serverStatus: string;
  }
}