/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastaComponent } from './pasta.component';

describe('PastaComponent', () => {
  let component: PastaComponent;
  let fixture: ComponentFixture<PastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
