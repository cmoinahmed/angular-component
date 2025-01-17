import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  serverName = '';
  serverContent = '';
  serverStatus = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, serverStatus: string}>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(serverNameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
      serverStatus: this.serverStatus
    });
  }
}