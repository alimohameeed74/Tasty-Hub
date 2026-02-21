import { Component, OnInit } from '@angular/core';
import { FixedLayoutComponent } from '../../shared-components/fixed-layout/fixed-layout.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  imports: [FixedLayoutComponent],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
