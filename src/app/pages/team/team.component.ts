import { Component, OnInit } from '@angular/core';
import { FixedLayoutComponent } from '../../shared-components/fixed-layout/fixed-layout.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  imports: [FixedLayoutComponent],
})
export class TeamComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
