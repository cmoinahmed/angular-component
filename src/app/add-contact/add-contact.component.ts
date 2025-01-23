import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  name = '';
  email = '';
  phone = '';

  @Output() contactAdded = new EventEmitter<{
    name: string;
    email: string;
    phone: string;
  }>();

  addContact() {
    if (this.name && this.email && this.phone) {
      this.contactAdded.emit({
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
      this.name = '';
      this.email = '';
      this.phone = '';
    }
  }
}