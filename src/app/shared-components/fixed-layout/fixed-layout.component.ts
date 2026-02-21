import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-layout',
  templateUrl: './fixed-layout.component.html',
  styleUrls: ['./fixed-layout.component.css'],
})
export class FixedLayoutComponent implements OnInit {
  @Input() pageTitle: string = '';
  constructor() {}

  ngOnInit() {}
}
