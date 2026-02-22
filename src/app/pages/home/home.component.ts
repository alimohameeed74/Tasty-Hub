import { Component, OnInit } from '@angular/core';
import { FixedLayoutComponent } from '../../shared-components/fixed-layout/fixed-layout.component';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FixedLayoutComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
