import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  user?: {
    id: string;
    name: string;
    status: boolean;
  };

  ngOnInit() {
    /* 
       This approach is useful if you expect the route parameters to change dynamically
       while staying on the same page/component.
    */
    // this.user = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   name: this.activatedRoute.snapshot.params['name'],
    //   status: this.activatedRoute.snapshot.params['status'],
    // };

    /* 
       It does not reactively update if the route parameters change 
       while the component is still active.
    */
    this.activatedRoute.params.subscribe((params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
        status: params['status'] === 'true', // Convert string to boolean
      };
    });
  }

  contacts = [
    {
      name: 'Moin Ahmed',
      email: 'cmoinahmed@gmail.com',
      phone: '8618227093',
    },
    {
      name: 'Tahreen Anjum',
      email: 'pateltahreenanjum@gmail.com',
      phone: '8431294043',
    },
  ];

  onContactAdded(contact: { name: string; email: string; phone: string }) {
    this.contacts.push(contact);
  }

  backToHome() {
    // this.router.navigate(['/']);
    this.router.navigateByUrl('/');
  }
}
