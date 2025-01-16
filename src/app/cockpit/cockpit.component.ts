import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  serverName = '';
  serverContent = '';
  serverStatus = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string; serverContent: string; serverStatus: string }>();

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
      serverStatus: this.serverStatus
    })
  }

}