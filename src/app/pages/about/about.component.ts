import { Component, OnInit } from '@angular/core';
import { FixedLayoutComponent } from '../../shared-components/fixed-layout/fixed-layout.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [FixedLayoutComponent],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
