/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeveranserComponent } from './leveranser.component';

describe('LeveranserComponent', () => {
  let component: LeveranserComponent;
  let fixture: ComponentFixture<LeveranserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveranserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveranserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
