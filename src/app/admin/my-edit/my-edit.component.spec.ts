/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyEditComponent } from './my-edit.component';

describe('MyEditComponent', () => {
  let component: MyEditComponent;
  let fixture: ComponentFixture<MyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
