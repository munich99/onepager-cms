/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyContent01Component } from './my-content01.component';

describe('MyContent01Component', () => {
  let component: MyContent01Component;
  let fixture: ComponentFixture<MyContent01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContent01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
