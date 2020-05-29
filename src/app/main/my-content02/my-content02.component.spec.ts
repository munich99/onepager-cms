/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyContent02Component } from './my-content02.component';

describe('MyContent02Component', () => {
  let component: MyContent02Component;
  let fixture: ComponentFixture<MyContent02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContent02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContent02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
